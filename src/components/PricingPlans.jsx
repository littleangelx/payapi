import PricingPlanItem from "./PricingPlanItem";

const PricingPlans = () => {
  return (
    <div className="pricingPlans">
      <PricingPlanItem
        name="Free Plan"
        price={0}
        included={["Transactions", "Auth", "Identity"]}
        notIncluded={["Investments", "Assets", "Liabilities", "Income"]}
      >
        Build and test using our core set of products with up to 100 API
        requests
      </PricingPlanItem>
      <PricingPlanItem
        name="Basic Plan"
        price={249}
        included={["Transactions", "Auth", "Identity", "Investments", "Assets"]}
        notIncluded={["Liabilities", "Income"]}
      >
        Launch your project with unlimited requests and no contractual minimums
      </PricingPlanItem>
      <PricingPlanItem
        name="Premium Plan"
        price={499}
        included={[
          "Transactions",
          "Auth",
          "Identity",
          "Investments",
          "Assets",
          "Liabilities",
          "Income",
        ]}
      >
        Get tailored solutions, volume pricing, and dedicated support for your
        team
      </PricingPlanItem>
    </div>
  );
};

export default PricingPlans;
