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
import get from 'lodash.get'

const StyledCell = styled(Cell)`
  border-bottom: solid 1px grey;
`;

const renderValue = ({ path, note, type }, data) => {
  switch (type) {
    case 'unordered-list':
      const unorderedList = get(data, path, [])
      return (
        <UnorderedList listItemMarker={IconFilledCircle}>
          {unorderedList.map(v => (
            <div key={v}>{v}</div>
          ))}
        </UnorderedList>
      );

    case 'card-number':
      return (
        <>
          <PaymentCardIcon cardNumber={get(data, path, '')} />
          <span>{get(data, path, '')}</span>
        </>
      );

    default:
      return get(data, path, '');
  }
};

const ListItem = props => {
  const { label, href, note, data } = props;
  return (
    <>
      <StyledCell xs={4}>{label}</StyledCell>
      <StyledCell xs={6}>
        <div>{renderValue(props, data)}</div>
        {note && <sub>{note}</sub>}
      </StyledCell>
      <StyledCell xs={2}>{href && <Link href={href}>Edit</Link>}</StyledCell>
    </>
  );
};

export const List = ({ items, title }) => {
  const {
    data,
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
          <ListItem key={item.label} {...item} data={data}></ListItem>
        ))}
      </Grid>
    </Block>
  );
};
