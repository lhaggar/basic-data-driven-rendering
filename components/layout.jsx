import {
  Grid,
  Cell,
  styled,
  ThemeProvider,
  newskitLightTheme,
  Block,
} from 'newskit';
import merge from 'lodash.merge';
import { PageContextProvider, baseContext } from './context';
import { NavBar } from './nav-bar';
import { Footer } from './footer';

const StyledCell = styled(Cell)`
  height: 100vh;
  border-right: solid 1px grey;
`;

export const Layout = ({ context, children }) => {
  const c = merge({}, baseContext, context);
  return (
    <PageContextProvider context={c}>
      <ThemeProvider theme={newskitLightTheme}>
        <Grid>
          <StyledCell xsHidden smHidden md={2}>
            <NavBar />
          </StyledCell>
          <StyledCell xs={12} md={10}>
            <Block spaceInset={c.sectionsOverrides.spaceInset}>
              {children}
            </Block>
          </StyledCell>
        </Grid>
        <Footer />
      </ThemeProvider>
    </PageContextProvider>
  );
};
