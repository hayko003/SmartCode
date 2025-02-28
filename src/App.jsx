import "./App.css";
import Header from "./components/header/header";
import SectionSecond from "./components/sectionsecond/second"

function App(props) {
  return (
    <div>
      <Header navigation={props.navigation} />
      <SectionSecond data={props.data}/>
    </div>
  );
  
}

export default App;
