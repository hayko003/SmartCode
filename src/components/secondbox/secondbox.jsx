import "../secondbox/secondbox.css";
import Btnsee from "../button_see/btnsee";
function SecondBox(props) {
  return (
    <div className="box">
      <div className="img_h1-wrapper">
        <img className="box_img" src={props.elem.image} alt="" />
        <h1 className="box_h1">{props.elem.title}</h1>
      </div>
      <p>Դասընթաց</p>
      <Btnsee />
      <div className="holder_price-duration">
        <p className="p_duration">{props.elem.duration}</p>
        <p className="price">{props.elem.price}</p>
      </div>
    </div>
  );
}

export default SecondBox;
