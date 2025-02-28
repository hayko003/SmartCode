import Nav from "../nav/nav"
import Wrapper from "../wrapper/wrapper"
import "../container/container.css"

function Container(props) {
    console.log(props);
    return (
        <div className="container">
            <Nav navigation={props.navigation}/>
            <Wrapper />
        </div>
    )
}

export default Container