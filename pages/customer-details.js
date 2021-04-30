import { CustomerDetailsPage } from "../components/pages/customer-details";

const Page = (props) => {
  return <CustomerDetailsPage {...props} />;
};

export default Page;

export const getServerSideProps = async (context) => {
  return {
    props: {
      user: {
        firstName: "Jane",
        lastName: "Smith",
        customData: {
          dateOfBirth: "01/01/1970",
        },
        email: "jane.smith@example.com",
        password: "************",
        phone: {
          mobile: "07123 987 654",
          work: "07123 987 654",
          home: "you still use this?",
        },
        address: "1 Example Road, Placeholderville, Fake County AA12 3AA",
      },
    },
  };
};
