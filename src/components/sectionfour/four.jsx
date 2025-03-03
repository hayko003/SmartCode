import FourBlock from "../fourblock/fourblock";
import "../sectionfour/four.css";
import ButtonStart from "../button/button";

function FourSection(props) {
  return (
    <div className="four_section">
      <h1>Դասընթացավարներ</h1>
      <p>
        Մեր փորձառու մասնագետները կմատուցեն Ձեզ բարդ թվացող
        <br /> ինֆորմացիան բավականին պարզեցված տեսքով:
      </p>
      <hr style={{margin : "20px auto", }} />
      <div className="four_box">
        {props.trainers.map((elem) => {
            return <FourBlock elem={elem} />;
        })}
      </div>
      <ButtonStart/>
    </div>
  );
}

export default FourSection;
