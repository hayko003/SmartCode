import SecondBox from "../secondbox/secondbox";
import "../secondbox/secondbox.css"
function SectionSecond(props) {
  return (
    <div className="container">
      <div className="section_second">
        <h1>Ծրագրավորման <span>դասընթացներ</span></h1>
        <p>Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</p>
      </div>
      <div className="box_holder">
        <SecondBox data={props.data}/>
        <SecondBox data={props.data}/>
        <SecondBox data={props.data}/>
        <SecondBox data={props.data}/>
      </div>
    </div>
  );
}

export default SectionSecond;
