import { Layout } from '../layout';
import { PageRenderer } from '../page-renderer';

export const customerDetailsPageContext = {
  header: {
    title: 'Customer Details',
    description:
      'Basic info such as your name and contact details, as well as log in credentials.',
  },
  sections: [
    {
      type: 'list',
      title: 'Profile',
      items: [
        { label: 'Name', value: 'Jane Smith', href: 'http://example.com/' },
        {
          label: 'Date of Birth',
          value: '01/01/1970',
        },
      ],
    },
    {
      type: 'list',
      title: 'Log in and Security',
      items: [
        {
          label: 'Email',
          value: 'jane.smith@example.com',
          href: 'http://example.com/',
        },
        {
          label: 'Password',
          value: '************',
          href: 'http://example.com/',
        },
      ],
    },
    {
      type: 'list',
      title: 'Contact Details',
      items: [
        {
          label: 'Mobile',
          value: '07123 987 654',
          href: 'http://example.com/',
        },
        {
          label: 'Address',
          value: '1 Example Road, Placeholderville, Fake County AA12 3AA',
          href: 'http://example.com/',
        },
      ],
    },
  ],
};

export const CustomerDetailsPage = ({ context }) => (
  <Layout context={context || customerDetailsPageContext}>
    <PageRenderer />
  </Layout>
);
