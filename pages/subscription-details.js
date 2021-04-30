import {
  SubscriptionDetailsPage,
  subscriptionDetailsPageContext,
} from "../components/pages/subscription-details";

const context = {
  ...subscriptionDetailsPageContext,
  sections: subscriptionDetailsPageContext.sections.map((section) => {
    if (section.title === "Your Subscription") {
      return {
        ...section,
        items: [
          ...section.items,
          {
            label: "Special ID",
            path: "specialId",
            note:
              "This is a special ID section added via the page file, not the page component! Woah!",
          },
        ],
      };
    }
    return section;
  }),
};

const Page = (props) => (
  <SubscriptionDetailsPage context={context} {...props} />
);
export default Page;

export const getServerSideProps = async (context) => {
  return {
    props: {
      subscription: {
        subType: "Standard Daily",
        price: "£19.99 - Billed Monthly",
        customerNumber: "1234567890",
        services: [
          "Daily delivery",
          "A different thing each day",
          "A free pint on your birthday",
        ],
        billing: {
          cardNumber: "**** **** **** 1234",
          shippingAddress:
            "1 Example Road, Placeholderville, Fake County AA12 3AA",
        },
        specialId: "0987654321",
      },
    },
  };
};
