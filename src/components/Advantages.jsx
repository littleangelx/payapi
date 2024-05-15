import personalFinances from "/assets/home/desktop/icon-personal-finances.svg";
import banking from "/assets/home/desktop/icon-banking-and-coverage.svg";
import consumerPayments from "/assets/home/desktop/icon-consumer-payments.svg";
import AdvantageItem from "./AdvantageItem";

const Advantages = () => {
  return (
    <div className="advantagesContainer">
      <AdvantageItem title="Personal Finances" image={personalFinances}>
        {" "}
        Consolidate financial data from multiple sources and categorize
        transactions up to 2 years of history. Analyze reports to reconcile
        activities in your account.
      </AdvantageItem>
      <AdvantageItem title="Banking & Coverage" image={banking}>
        {" "}
        With our platform, you can speed up account onboarding and support
        ongoing payments for checking, savings, credit card, and brokerage
        accounts.
      </AdvantageItem>
      <AdvantageItem title="Consumer Payments" image={consumerPayments}>
        {" "}
        It’s easier to set up secure bank payments with us through a flow
        designed with the user experience in mind. Customers could instantly
        authenticate their account.
      </AdvantageItem>
    </div>
  );
};

export default Advantages;
