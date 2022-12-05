// Types
import { SummaryFields } from '../types';

// Styled components
import { List, Name, Value } from './Summary.style';

type SummaryProps = {
  summary: SummaryFields;
};

export const Summary = ({ summary }: SummaryProps): JSX.Element => {
  const { colour, pages, paper, price } = summary;

  return (
    <div>
      Summary
      <List>
        <Name>Pages</Name>
        <Value>{pages ?? '-'}</Value>
        <Name>Colour</Name>
        <Value>{colour ?? '-'}</Value>
        <Name>Layout</Name>
        <Value>{paper ?? '-'}</Value>
        <Name>Price</Name>
        <Value>
          {/* Assume en-GB and GBP for the test, but this should be set globally for a real app */}
          {price !== undefined
            ? new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP',
              }).format(price)
            : '-'}
        </Value>
      </List>
    </div>
  );
};
