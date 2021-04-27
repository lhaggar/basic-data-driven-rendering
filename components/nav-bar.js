import { Block, UnorderedList, Link } from 'newskit';
import { usePageContext } from './context';

export const NavBar = () => {
  const {
    nav,
    navOverrides: { spaceInset },
  } = usePageContext();
  return (
    <Block spaceInset={spaceInset}>
      <UnorderedList>
        {nav.map(props => (
          <Link {...props} />
        ))}
      </UnorderedList>
    </Block>
  );
};
