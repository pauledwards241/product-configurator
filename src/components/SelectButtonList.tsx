// Types
import { InputFields, OnChange, OptionList } from '../types';

// Components
import { SelectButton } from './SelectButton';

// Styled components
import { Fieldset, Legend, OptionsContainer } from './SelectButtonList.style';

type SelectButtonListProps = {
  label: string;
  name: keyof InputFields;
  onChange: OnChange;
  options: OptionList;
  value?: number | string;
};

export const SelectButtonList = ({
  label,
  name,
  onChange,
  options,
  value,
}: SelectButtonListProps): JSX.Element => (
  <Fieldset>
    <Legend>{label}</Legend>
    <OptionsContainer role="radiogroup">
      {options.ids.map((id) => (
        <SelectButton
          isSelected={id === value}
          key={id}
          label={options.entities[id]}
          name={name}
          onChange={onChange}
          value={id}
        />
      ))}
    </OptionsContainer>
  </Fieldset>
);
