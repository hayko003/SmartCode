import "../fourblock/fourblock.css";
function FourBlock(props) {
  return (
      <div className="block_wrapper">
        <img className="four_block-img" src={props.elem.image} alt="" />
        <h3 className="four_block_title">{props.elem.name}</h3>
        <p>{props.elem.lang}</p>
        <p>Trainer</p>
      </div>
  );
}

export default FourBlock;
