import { Block, H1, P } from 'newskit';
import { usePageContext } from './context';

export const Header = () => {
  const {
    header: {
      title,
      titleOverrides: { spaceStack, ...titleOverrides },
      description,
      descriptionOverrides,
    },
  } = usePageContext();
  return (
    <>
      <Block spaceStack={spaceStack}>
        <H1 overrides={titleOverrides}>{title}</H1>
      </Block>
      <P overrides={descriptionOverrides}>{description}</P>
    </>
  );
};
