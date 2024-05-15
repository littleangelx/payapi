import { useMediaQuery } from "react-responsive";

import iconCheck from "/assets/shared/desktop/icon-check.svg";

const PricingPlanItem = ({
  name,
  price,
  included,
  notIncluded = [],
  children = "",
}) => {
  const isMobile = useMediaQuery({ maxWidth: 699 });

  return (
    <div className="pricingPlanItemContainer">
      <h3>{name}</h3>
      {!isMobile && <p>{children}</p>}
      <h2>${price.toFixed(2)}</h2>
      <hr />
      {included.map((item) => (
        <div className="planIncludedContainer" key={item}>
          <div>
            <img src={iconCheck} />
          </div>
          <p>{item}</p>
        </div>
      ))}
      {notIncluded.map((item) => (
        <div className="planIncludedContainer" key={item}>
          <div style={{ width: "14px" }}></div>
          <p style={{ color: "#36536b80" }}>{item}</p>
        </div>
      ))}
      <hr />
      <button>Request Access</button>
    </div>
  );
};

export default PricingPlanItem;
