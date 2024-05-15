import { Link } from "react-router-dom";

import illustrationPhone from "/assets/home/desktop/illustration-phone-mockup.svg";

const Hero = () => {
  return (
    <div className="heroContainer">
      <img src={illustrationPhone} />
      <div className="heroContainerCTA">
        <h2>Start building with our APIs for absolutely free.</h2>
        <div className="ctaContainer">
          <input placeholder="Enter email address" />
          <button>Schedule a Demo</button>
        </div>
        <p>
          Have any questions?{" "}
          <Link to="contact">
            <strong>Contact Us</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
