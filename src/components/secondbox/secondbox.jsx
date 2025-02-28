
function SecondBox(props) {

  return (
    <div className="box">
      {props.data.map((elem) => {
        return (
          <div>
            <img src={elem.image} alt="" />
            <h6>{elem.title}</h6>
          </div>
        );
      })}
      <p>Դասընթաց</p>
      <div className="second_duration-price">
        {props.data.slice(0, 1).map((elem) => {
          return <p className="second_duration">{elem.duration}</p>;
        })}
        <p className="second_price">
          {props.data.slice(0, 1).map((elem) => {
            return <p className="second_duration">{elem.price}</p>;
          })}
        </p>
      </div>
    </div>
  );
}

export default SecondBox;
