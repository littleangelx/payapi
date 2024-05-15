import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import logo from "/assets/shared/desktop/logo.svg";
import hamburgerMenuIcon from "/assets/shared/mobile/menu.svg";

const MenuBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 599 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return (
    <div className="menuBarContainer">
      {isMobile && (
        <>
          <img src={logo} />
          <img src={hamburgerMenuIcon} />
        </>
      )}

      {isTablet && (
        <>
          <img src={logo} />{" "}
          <nav>
            <Link>Pricing</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </nav>
          <button>Schedule a Demo</button>
        </>
      )}

      {isDesktop && (
        <>
          <div className="desktopMenuBarLHS">
            <img src={logo} />{" "}
            <nav>
              <Link>Pricing</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </nav>
          </div>
          <button>Schedule a Demo</button>
        </>
      )}
    </div>
  );
};

export default MenuBar;
