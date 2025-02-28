import ButtonStart from "../button/button"

import "../sectionfirst/section.css"

import img from "../../assets/1.png"

function SectionFirst(props) {
    return (
        <div className="section_first">
            <h1 className="section_h1">
                <span>Սովորի՛ր</span> ծրագրավորում
                <br></br>
                <span>Դարձի՛ր</span> պահանջված մասնագետ</h1>
            <p>Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>
            <div className="btn_wrapper">
                <ButtonStart />
                <div className="vdn_btn-wrapper">
                    <img className="vdn_btn-icon" src={img} />
                    <button className="vdn_btn">Տեսանյութ</button>
                </div>
            </div>
        </div>
    )
}

export default SectionFirst