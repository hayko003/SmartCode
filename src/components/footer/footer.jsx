import "../footer/footer.css";

function Footer(props) {
  return (
    <div className="footer_wrapper">
      <div className="logo_text">
        <img
          className="smartImg"
          src="https://smartcode.am/public/image/logo.png?v=1"
          alt=""
        ></img>
        <p>
          Որակյալ ուսուցում, Անվճար
          <br /> պրակտիկա, Երաշխավորված
          <br /> աշխատանք
        </p>
        <div className="mini-logo_wrapper"></div>
      </div>

      <div className="footer_nav">
        <h3>Ընկերություն</h3>
        <hr style={{ margin: "20px auto" }} />
        <>
          {props.navigation.map((elem) => {
            return <p>{elem}</p>;
          })}
        </>
        <p></p>
      </div>

      <div className="footer_contact">
        <h3>Կապ մեզ հետ </h3>
        <hr style={{ margin: "20px auto" }} />
        <>
          {props.contactus.map((elem) => {
            return <p>{elem}</p>;
          })}
        </>
      </div>
    </div>
  );
}

export default Footer;
