import AboutItemsBottom from "../components/AboutItemsBottom";
import AboutItemsTop from "../components/AboutItemsTop";
import MenuBar from "../components/MenuBar";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="pageContainer">
      <MenuBar />
      <h2 className="mainHeading">
        We empower innovators by delivering access to the financial system
      </h2>
      <AboutItemsTop />
      <div className="image"></div>
      <Statistics />
      <AboutItemsBottom />
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

export default About;
