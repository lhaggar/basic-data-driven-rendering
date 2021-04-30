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
          path: 'subType',
          href: 'http://example.com/',
        },
        {
          label: 'Price',
          path: 'price',
        },
        {
          label: 'Customer Number',
          path: 'customerNumber',
          note:
            'Your customer number is your unique identifier and may be asked when contacting us.',
        },
        {
          label: `What's Included?`,
          type: 'unordered-list',
          path: 'services',
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
          path: 'billing.cardNumber',
          href: 'http://example.com/',
        },
        {
          label: 'Shipping Address',
          path: 'billing.shippingAddress',
          href: 'http://example.com/',
        },
      ],
    },
  ],
};

export const SubscriptionDetailsPage = ({ context, subscription }) => {
  const c = {
    ...context || subscriptionDetailsPageContext,
    data: subscription
  }
  return (
  <Layout context={c}>
    <PageRenderer />
  </Layout>
)};
