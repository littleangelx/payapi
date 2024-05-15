const AdvantageItem = ({ image, title, children }) => {
  return (
    <div className="advantageItemContainer">
      <img src={image} />
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
};

export default AdvantageItem;
