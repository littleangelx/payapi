import easyToImplementImage from "/assets/home/desktop/easy-to-implement.png";

const EasyToImplement = () => {
  return (
    <div className="desktopContainer">
      <div className="easyToImplementContainer">
        <img src={easyToImplementImage} />
        <div>
          <h2>Easy to implement</h2>
          <p>
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EasyToImplement;
