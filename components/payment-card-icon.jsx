import { styled } from 'newskit';

const StyledImage = styled.img`
  max-width: 40px;
  border: solid 1px blue;
  padding: 4px;
  border-radius: 2px;
  margin-right: 8px;
`;

export const PaymentCardIcon = ({ cardNumber }) =>
  cardNumber && <StyledImage src='/visa.svg' />;
