import { useEffect, useState } from 'react';

// Types
import {
  InputFields,
  ProductsMetadata,
  ProductOptions,
  SummaryFields,
} from '../types';

// Assets
import productShot from '../assets/ProductShot.jpeg';

// Data
import productOptionsData from '../data/productOptionsData.json';

// Utils
import { transformData } from '../utils/transformData';

// Components
import { Introduction } from './Introduction';
import { SelectButtonList } from './SelectButtonList';
import { Summary } from './Summary';

// Styled components
import { Container, Image, PageTitle } from './ProductConfigurator.style';

export const ProductConfigurator = (): JSX.Element => {
  const [metadata, setMetadata] = useState<ProductsMetadata | undefined>();
  const [fields, setFields] = useState<InputFields>({});
  const [summary, setSummary] = useState<SummaryFields>(fields);

  useEffect(() => {
    // Simulate an API call in an SPA by using useEffect, obviously this would have error handling in a real app
    // Transform the data for the UI
    const data = transformData(productOptionsData as ProductOptions);
    setMetadata(data);
  }, []);

  const handleChangeField = (
    name: keyof InputFields,
    value: number | string
  ) => {
    if (!metadata) return;

    const updatedFields: InputFields = { ...fields, [name]: value };

    const { colourOptions, paperOptions, productConfig } = metadata;
    const { colour, paper } = updatedFields;

    // If both configurable options have been set then grab the whole product summary,
    // Otherwise just set either the colour or paper label
    const summaryFields =
      colour && paper
        ? productConfig[colour][paper]
        : {
            ...(colour && { colour: colourOptions.entities[colour] }),
            ...(paper && { paper: paperOptions.entities[paper] }),
          };

    // Update fields and summary state
    setFields(updatedFields);
    setSummary(summaryFields);
  };

  return (
    <Container>
      <PageTitle>MOO Hardcover Notebook</PageTitle>
      <Image
        alt="A selection of our beautiful, well-crafted hardcover notebooks"
        src={productShot}
      />
      <div>
        <Introduction />
        {metadata ? (
          <form>
            <SelectButtonList
              label="Choose your colour"
              name="colour"
              onChange={handleChangeField}
              options={metadata.colourOptions}
              value={fields.colour}
            />
            <SelectButtonList
              label="Choose your page layout"
              name="paper"
              onChange={handleChangeField}
              options={metadata.paperOptions}
              value={fields.paper}
            />
            <Summary summary={summary} />
          </form>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Container>
  );
};
