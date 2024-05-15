import { useMediaQuery } from "react-responsive";

import logoFooter from "/assets/shared/desktop/logo-footer.svg";
import facebook from "/assets/shared/desktop/facebook.svg";
import twitter from "/assets/shared/desktop/twitter.svg";
import linkedIn from "/assets/shared/desktop/linkedin.svg";

const Footer = () => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  return (
    <footer>
      {isDesktop ? (
        <div className="desktopMenuBarLHS">
          <img src={logoFooter} className="footerLogo" />
          <nav>
            <h4>Pricing</h4>
            <h4>About</h4>
            <h4>Contact</h4>
          </nav>
        </div>
      ) : (
        <>
          <img src={logoFooter} className="footerLogo" />
          <nav>
            <h4>Pricing</h4>
            <h4>About</h4>
            <h4>Contact</h4>
          </nav>
        </>
      )}

      <div className="smIcons">
        <img src={facebook} />
        <img src={twitter} />
        <img src={linkedIn} />
      </div>
    </footer>
  );
};

export default Footer;
