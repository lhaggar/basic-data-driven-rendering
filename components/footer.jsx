import { styled, Stack, ConsentSettingsLink, Link } from 'newskit';
import { usePageContext } from './context';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  height: 100px;
  background: lightgrey;
  width: 100%;
  padding: 16px;
`;

export const Footer = () => {
  const {
    footer,
    footerOverrides: { typographyPreset, stylePreset },
  } = usePageContext();
  return (
    <StyledFooter>
      <Stack
        flow='horizontal-center'
        stackDistribution='flex-start'
        spaceInline='space040'
      >
        {footer.map(({ type, ...props }, i) =>
          type === 'cookie-settings' ? (
            <ConsentSettingsLink
              key={i}
              overrides={{ typographyPreset, stylePreset }}
              {...props}
            />
          ) : (
            <Link key={i} overrides={{ typographyPreset, stylePreset }} {...props} />
          )
        )}
      </Stack>
    </StyledFooter>
  );
};
