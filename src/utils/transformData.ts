// Types
import {
  OptionList,
  ProductConfiguration,
  ProductOptions,
  ProductsMetadata,
} from '../types';

// Transform data into a more useful format for the UI
// This whole file is pretty specific to this product. With a bit more info, we should be able to make it more generic.
type AttributeName = 'cover-colour' | 'paper-type' | 'page-count';
type AttributeValue = { label: string; value: number | string };
type AttributeMap = Record<AttributeName, AttributeValue>;

// Helper class for option list
// The idea behind normalising the option data is that we can maintain order through the ids array,
// but also allow a quick lookup via the entities object. This is needed when loading a partial summary where only the colour OR the paper layout has been chosen.
// This normalisation would not be needed if we added a default value for each option on the page - A UX decision :-D
class OptionListModel implements OptionList {
  entities: Record<number | string, string>;
  ids: (number | string)[];

  constructor() {
    this.entities = {};
    this.ids = [];
  }

  add(value: number | string, label: string) {
    // Don't add the option if it already exists
    if (value in this.entities) return;

    this.ids.push(value);
    this.entities[value] = label;
  }

  sort() {
    // Assume alphabetical for this test
    // Some sort of sort strategy could be passed in for a real app as sorting numbers alphabetically doesn't make sense
    this.ids.sort((a, b) => this.entities[a].localeCompare(this.entities[b]));
  }
}

export const transformData = (
  productOptions: ProductOptions
): ProductsMetadata => {
  // A map holding colour/layout configurations and which products they link to allowing for a fast lookup when using the app
  const productConfig: ProductConfiguration = {};

  // Colour and paper option lists
  const colourOptions = new OptionListModel();
  const paperOptions = new OptionListModel();

  // Loop through the products
  productOptions.products.forEach(({ attributes, id, price }) => {
    // Convert attributes from an array to an object keyed by type
    // This makes a pretty big assumption that every product will have a colour, paper type and page count
    // This could definitely be made more generic by looking at selectable attributes to build the config options and adding non-selectable ones to the product summary
    const attributeMap = attributes.reduce<Partial<AttributeMap>>(
      (acc, { label, type, value }) => ({ ...acc, [type]: { label, value } }),
      {}
    ) as AttributeMap;

    // Get each attibute
    const colour = attributeMap['cover-colour'];
    const pageCount = attributeMap['page-count'];
    const paper = attributeMap['paper-type'];

    // Add colour/paper configurations and the resulting product e.g. { red: { dotted: { ...product summary... } } }
    // This allows a quick lookup of the product summary once both colour and paper options have been selected
    // This assumes that we only have colour and paper type options and would need to be made more generic for multiple products
    productConfig[colour.value] = {
      ...productConfig[colour.value],
      [paper.value]: {
        colour: colour.label,
        id,
        pages: pageCount.label,
        paper: paper.label,
        price,
      },
    };

    // Add colour to the colour option list
    colourOptions.add(colour.value, colour.label);

    // Add paper to the paper option list
    paperOptions.add(paper.value, paper.label);
  });

  // Sort colour options
  colourOptions.sort();

  // Sort paper options
  paperOptions.sort();

  return {
    colourOptions,
    paperOptions,
    productConfig,
  };
};
