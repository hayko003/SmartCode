import SectionFirst from "../sectionfirst/section"
import SectionImg from "../sectionimg/sectionimg"
import "../wrapper/wrapper.css"

function Wrapper(props) {
    return (
        <div className='wrapper'>
            <SectionFirst />
            <SectionImg />
        </div>
    )
}

export default Wrapper