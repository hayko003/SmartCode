import "../sectionthird/third.css";
import Thirdtext from "../thirdtext/thirdtext"; 
import ButtonStart from "../button/button";

function ThirdSection(props) {
  return (
    <div className="third_section">
      <div className="titles_wrapper">
        <h1>
          Ինչո՞ւ սովորել <span>մեզ մոտ</span>
        </h1>
        <p>Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է</p>
        <hr style={{margin : "20px auto", }} />
        </div>
      <div className="third_wrapper">
        <img src="https://smartcode.am/public/image/per2.svg" alt="" />
        <div className="advantages_sc">
            {props.thirdData.map((elem) => {
                return <Thirdtext elem={elem}/>
            })}
        </div>
      </div>
      <ButtonStart/>
    </div>
  );
}

export default ThirdSection;
