import SecondBox from "../secondbox/secondbox";
import "../sectionsecond/second.css";
function SectionSecond(props) {

  return (
    <div>
      <div className="section_second">
        <h1>
          Ծրագրավորման <span>դասընթացներ</span>
        </h1>
        <p>Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</p>

        <div className="box_holder">
          <div className="box-wrapper">
            {props.data.map((elem) => {
              return <SecondBox elem={elem} />;
            })}
          </div>
        <img
          className="box_large-img"
          src="https://smartcode.am/public/image/per4.svg"
          alt=""
        />
        </div>
      </div>
    </div>
  );
}

export default SectionSecond;
