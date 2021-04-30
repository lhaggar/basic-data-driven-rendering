import { Grid, Cell, H1, P } from 'newskit';
import { usePageContext } from './context';
import { Header } from './header';
import { List } from './list';

const componentMap = {
  list: List,
};

export const PageRenderer = () => {
  const { sections } = usePageContext();

  return (
    <Grid>
      <Cell xs={12}>
        <Header />
      </Cell>
      {sections.map((section, i) => {
        const SectionComponent = componentMap[section.type];
        return (
          <Cell xs={12} md={8} lg={7} key={i}>
            <SectionComponent {...section} />
          </Cell>
        );
      })}
    </Grid>
  );
};
