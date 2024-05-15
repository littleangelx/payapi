import teslaLogo from "/assets/shared/desktop/tesla.svg";
import microsoftLogo from "/assets/shared/desktop/microsoft.svg";
import hpLogo from "/assets/shared/desktop/hewlett-packard.svg";
import oracleLogo from "/assets/shared/desktop/oracle.svg";
import googleLogo from "/assets/shared/desktop/google.svg";
import nvidiaLogo from "/assets/shared/desktop/nvidia.svg";

const Partners = () => {
  return (
    <div className="partnersContainer">
      <div className="logosContainer">
        <img src={teslaLogo} />
        <img src={microsoftLogo} />
        <img src={hpLogo} />
        <img src={oracleLogo} />
        <img src={googleLogo} />
        <img src={nvidiaLogo} />
      </div>
      <div className="partnersInfo">
        <div className="partnersInfoBody">
          <h3>Who we work with</h3>
          <p>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
        </div>
        <button>About Us</button>
      </div>
    </div>
  );
};

export default Partners;
