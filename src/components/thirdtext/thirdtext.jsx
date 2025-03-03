import "../thirdtext/thirdtext.css"

function Thirdtext(props) {
    return (
    <div className="text_block">
        <h1 className="title_block">{props.elem.title}</h1>
        <p className="paragraph_block">{props.elem.p}</p>
    </div>
    )
}

export default Thirdtext