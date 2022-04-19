import './CustomButton.css'
function CustomButton(props) {
  const buttonStyle = {
    background : props.color,
    display : 'flex',
    padding : '10px 20px',
    borderRadius: '50px',
    margin: 'auto',
    border: 'none',
    boxShadow: '0px 3px 3px #bebebe,0px -3px 3px #ffffff'
  }
  const parentStyle={
    width:500,
    height:500,
    background:props.color,
    display:'flex'
  }
  return (
    <div style={parentStyle} className="customButton">
      <div style={buttonStyle}

      >
        Cyber-Button
      </div>
    </div>
  );
}

export default CustomButton;
