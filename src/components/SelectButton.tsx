// Types
import { InputFields, OnChange } from '../types';

// Styled components
import { Input, Label, RadioContainer } from './SelectButton.style';

type SelectButtonProps = {
  isSelected: boolean;
  label: string;
  name: keyof InputFields;
  onChange: OnChange;
  value: number | string;
};

export const SelectButton = ({
  isSelected,
  label,
  name,
  onChange,
  value,
}: SelectButtonProps): JSX.Element => {
  const handleChange = (value: number | string) => () => {
    onChange(name, value);
  };

  return (
    <RadioContainer>
      <Input
        checked={isSelected}
        id={value.toString()}
        name={name}
        onChange={handleChange(value)}
        type="radio"
        value={value}
      />
      <Label htmlFor={value.toString()}>{label}</Label>
    </RadioContainer>
  );
};
