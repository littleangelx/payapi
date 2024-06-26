import Advantages from "../components/Advantages";
import EasyToImplement from "../components/EasyToImplement";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MenuBar from "../components/MenuBar";
import Partners from "../components/Partners";
import SimpleUiUx from "../components/simpleUiUx";

const Home = () => {
  return (
    <div className="homePageContainer">
      <MenuBar />
      <Hero />
      <Partners />
      <EasyToImplement />
      <SimpleUiUx />
      <Advantages />
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

export default Home;
