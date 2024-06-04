import "./Button.css";

interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
}

function Button({ text, style }: ButtonProps) {
  return (
    <button className="Button" style={style}>
      {text}
    </button>
  );
}

export default Button;
