import "../ul/ul.css"


function UlAndLi(props) {

    return (
        <ul>
            {
                props.navigation.map((elem) => {
                    return <li>{elem}</li>
                })
            }
        </ul>

    )
}

export default UlAndLi