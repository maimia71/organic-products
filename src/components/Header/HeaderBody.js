import "./HeaderBody.css";
import BodyImage from "../../assets/body_image.png";
import Flower from "../../assets/flower.png";

function HeaderBody() {
  return (
    <div className="headerbody">
      <div className="headerbody__left">
        <div className="headerbody__left__content">
          <div className="headerbody__left__upper__content">
            <h4>Healthy life with</h4>
            <h1>
              {" "}
              <strong>Nature Organic</strong>{" "}
            </h1>
          </div>

          <div className="headerbody__left__lower__content">
            <p>
              Vegetables are the editable parts of the plant that is used in
              cooking or can be eaten now
            </p>
            <p style={{ marginTop: "10px" }}></p>
            <button type="button">Explore Now</button>
          </div>
        </div>
      </div>

      <div className="headerbody__right" style={{ border: "" }}>
        <div
          className="headerbody__right__content"
          style={{ position: "relative", backgroundColor: "", height: "600px" }}
        >
          <div
            className="headerbody__right__content__box"
            style={{ marginLeft: "250px", position: "absolute" }}
          >
            <div
              className="headerbody__right__content__box__inner"
              style={{ display: "", position: "" }}
            >
              <img src={BodyImage} alt="not found" />
            </div>
          </div>

          <div
            className="headerbody__right__content__flower"
            style={{ position: "absolute", marginTop: "200px" }}
          >
            <img className="flower" src={Flower} alt="not found" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBody;
