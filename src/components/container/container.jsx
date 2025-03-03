import Nav from "../nav/nav";
import Wrapper from "../wrapper/wrapper";
import "../container/container.css";
import SectionSecond from "../sectionsecond/second";
import ThirdSection from "../sectionthird/third";
import FourSection from "../sectionfour/four";
import AboutUs from "../aboutus/aboutus"
import Footer from "../footer/footer";
function Container(props) {
  console.log(props);

  return (
    <div className="container">
      <Nav navigation={props.navigation} />
      <Wrapper />
      <SectionSecond data={props.data} />
      <ThirdSection thirdData={props.thirdData} />
      <FourSection trainers={props.trainers}/>
      <AboutUs/>
      <Footer navigation={props.navigation} contactus={props.contactus}/>
      
    </div>
  );
}

export default Container;
