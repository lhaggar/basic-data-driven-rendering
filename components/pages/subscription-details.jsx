import { Layout } from '../layout';
import { PageRenderer } from '../page-renderer';

export const subscriptionDetailsPageContext = {
  header: {
    title: 'Subscription and Billing',
    description:
      'Details about your subscription, including payment info and transactions.',
  },
  sections: [
    {
      type: 'list',
      title: 'Your Subscription',
      items: [
        {
          label: 'Subscription Type',
          value: 'Standard Daily',
          href: 'http://example.com/',
        },
        {
          label: 'Price',
          value: '£19.99 - Billed Monthly',
        },
        {
          label: 'Customer Number',
          value: '1234567890',
          note:
            'Your customer number is your unique identifier and may be asked when contacting us.',
        },
        {
          label: `What's Included?`,
          type: 'unordered-list',
          value: [
            'Daily delivery',
            'A different thing each day',
            'A free pint on your birthday',
          ],
          href: 'http://example.com/',
        },
      ],
    },
    {
      type: 'list',
      title: 'Your Billing Details',
      items: [
        {
          label: 'Card Number',
          type: 'card-number',
          value: '**** **** **** 1234',
          href: 'http://example.com/',
        },
        {
          label: 'Shipping Address',
          value: '1 Example Road, Placeholderville, Fake County AA12 3AA',
          href: 'http://example.com/',
        },
      ],
    },
  ],
};

export const SubscriptionDetailsPage = ({ context }) => (
  <Layout context={context || subscriptionDetailsPageContext}>
    <PageRenderer />
  </Layout>
);
