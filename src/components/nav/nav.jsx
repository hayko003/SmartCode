import UlAndLi from "../ul/ul"
import ButtonStart from "../button/button"

import "../nav/nav.css"

function Nav(props) {
    return (
        <div className="nav">
            <img className="smartImg" src="https://smartcode.am/public/image/logo.png?v=1" alt=""></img>
            <UlAndLi navigation={props.navigation} />
            <ButtonStart />
        </div>
    )
}

export default Nav