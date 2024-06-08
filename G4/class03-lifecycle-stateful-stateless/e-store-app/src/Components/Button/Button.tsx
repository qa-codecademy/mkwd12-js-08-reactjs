import "./Button.css";

interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
  onBtnClick: () => void;
}

function Button({ text, style, onBtnClick }: ButtonProps) {
  return (
    <button className="Button" style={style} onClick={onBtnClick}>
      {text}
    </button>
  );
}
export default Button;
