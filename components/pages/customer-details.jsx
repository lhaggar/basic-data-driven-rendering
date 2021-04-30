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
        { label: 'First Name', path: 'firstName', href: 'http://example.com/' },
        { label: 'Last Name', path: 'lastName', href: 'http://example.com/' },
        {
          label: 'Date of Birth',
          path: 'customData.dateOfBirth',
        },
      ],
    },
    {
      type: 'list',
      title: 'Log in and Security',
      items: [
        {
          label: 'Email',
          path: 'email',
          href: 'http://example.com/',
        },
        {
          label: 'Password',
          path: 'password',
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
          path: 'phone.mobile',
          href: 'http://example.com/',
        },
        {
          label: 'Address',
          path: 'address',
          href: 'http://example.com/',
        },
      ],
    },
  ],
};

export const CustomerDetailsPage = ({ context, user }) => {
  const c = {
    ...context || customerDetailsPageContext,
    data: user,
  }
  // console.log('🔥', c.data)
  return (
  <Layout context={c}>
    <PageRenderer />
  </Layout>
)};
