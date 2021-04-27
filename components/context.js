import React from 'react';

const PageContext = React.createContext({});

export const PageContextProvider = ({ context, children }) => (
  <PageContext.Provider value={context}>{children}</PageContext.Provider>
);

export const PageContextConsumer = PageContext.Consumer;

export const usePageContext = () => React.useContext(PageContext);

export const baseContext = {
  nav: [
    { href: '/customer-details', children: 'Customer Details' },
    { href: '/subscription-details', children: 'Subscription Details' },
  ],
  navOverrides: {
    spaceInset: 'spaceInset030',
  },
  header: {
    title: '',
    titleOverrides: {
      spaceStack: 'space040',
      typographyPreset: 'utilityHeading060',
    },
    description: '',
    descriptionOverrides: {
      typographyPreset: 'utilityBody020',
    },
  },
  sections: [],
  sectionsOverrides: {
    spaceInset: 'spaceInset030',
    list: {
      spaceStack: 'space060',
      typographyPreset: 'utilityHeading040',
    },
  },
  footer: [
    { href: '/about-us', children: 'About Us' },
    { href: '/privacy', children: 'Privacy' },
    { href: '/help', children: 'Help' },
    { type: 'cookie-settings', children: 'Cookie Settings' },
    { href: '/contact-us', children: 'Contact Us' },
  ],
  footerOverrides: {
    typographyPreset: 'utilityBody020',
    stylePreset: 'linkStandalone',
  },
};
