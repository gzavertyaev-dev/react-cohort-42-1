import "./styles.css";

function Button({ type = "button", name, onClick }) {
  return (
    <button className="button-component" onClick={onClick} type={type}>
      {name}
    </button>
  );
}

export default Button;
