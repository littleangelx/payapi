const AboutItem = ({ title, children }) => {
  return (
    <div className="aboutItemContainer">
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
};

export default AboutItem;
