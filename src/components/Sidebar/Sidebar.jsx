import "./Sidebar.css";

export default function Sidebar() {
  const IMAGES = {
    image1: new URL("./img/Frame.png", import.meta.url).href,
  };

  return (
    <div className="sidebar">
      <div className="sidebar-box">
        <div className="sidebar-box__element-left">
          <img
            style={{
              width: "91px",
              height: "82px",
              position: "relative",
              right: "17px",
            }}
            src={IMAGES.image1}
            alt="скидки"
          />
        </div>
        <div className="sidebar-box__element-right">
          <h3 className="sidebar-box__element-right__text">Получай товары</h3>
          <h3 className="sidebar-box__element-right__text">Бесплатно!</h3>
          <button className="sidebar-box__element-right__button">
            Узнать подробнее
          </button>
        </div>
      </div>
    </div>
  );
}
