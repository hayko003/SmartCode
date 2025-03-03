import "./header.css"
import Container from "../container/container"



function Header(props) {  
  return (
      <Container thirdData={props.thirdData} data={props.data} navigation={props.navigation} trainers={props.trainers} contactus={props.contactus}/>
  )
}

export default Header 