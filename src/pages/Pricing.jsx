import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import PricingPlans from "../components/PricingPlans";

const Pricing = () => {
  return (
    <div className="pageContainer">
      <MenuBar />
      <h2 className="mainHeading">Pricing</h2>
      <PricingPlans />
      <div className="heroContainerCTA heroContainerBottom">
        <h2 className="heroContainerHeading">Ready to start?</h2>
        <div className="ctaContainer">
          <input placeholder="Enter email address" />
          <button>Schedule a Demo</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
