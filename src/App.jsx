import "./App.css";
import Header from "./components/header/header";

function App(props) {
  console.log(props);
  
  return (
    <div>
      <Header data={props.data} navigation={props.navigation} thirdData={props.thirdData} trainers={props.trainers} contactus={props.contactus}/>
    </div>
  );
  
}

export default App;
