import {
  Grid,
  Cell,
  Link,
  styled,
  H2,
  Block,
  UnorderedList,
  IconFilledCircle,
} from 'newskit';
import { usePageContext } from './context';
import { PaymentCardIcon } from './payment-card-icon';

const StyledCell = styled(Cell)`
  border-bottom: solid 1px grey;
`;

const renderValue = ({ value, note, type }) => {
  switch (type) {
    case 'unordered-list':
      return (
        <UnorderedList listItemMarker={IconFilledCircle}>
          {value.map(v => (
            <div key={v}>{v}</div>
          ))}
        </UnorderedList>
      );

    case 'card-number':
      return (
        <>
          <PaymentCardIcon cardNumber={value} />
          <span>{value}</span>
        </>
      );

    default:
      return value;
  }
};

const ListItem = props => {
  const { label, href, note } = props;
  return (
    <>
      <StyledCell xs={4}>{label}</StyledCell>
      <StyledCell xs={6}>
        <div>{renderValue(props)}</div>
        {note && <sub>{note}</sub>}
      </StyledCell>
      <StyledCell xs={2}>{href && <Link href={href}>Edit</Link>}</StyledCell>
    </>
  );
};

export const List = ({ items, title }) => {
  const {
    sectionsOverrides: {
      list: { spaceStack, typographyPreset },
    },
  } = usePageContext();
  return (
    <Block spaceStack={spaceStack}>
      <Grid xsMargin='space000'>
        <Cell xs={12}>
          <H2 overrides={{ typographyPreset }}>{title}</H2>
        </Cell>
        {items.map(item => (
          <ListItem key={item.label} {...item}></ListItem>
        ))}
      </Grid>
    </Block>
  );
};
