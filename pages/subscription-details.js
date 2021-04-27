import {
  SubscriptionDetailsPage,
  subscriptionDetailsPageContext,
} from '../components/pages/subscription-details';

const context = {
  ...subscriptionDetailsPageContext,
  sections: subscriptionDetailsPageContext.sections.map(section => {
    if (section.title === 'Your Subscription') {
      return {
        ...section,
        items: [
          ...section.items,
          {
            label: 'Special ID',
            value: '0987654321',
            note:
              'This is a special ID section added via the page file, not the page component! Woah!',
          },
        ],
      };
    }
    return section;
  }),
};

const Page = (...props) => (
  <SubscriptionDetailsPage context={context} {...props} />
);
export default Page;
