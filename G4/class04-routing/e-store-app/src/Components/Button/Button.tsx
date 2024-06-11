import "./Button.css";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onBtnClick: () => void;
}

function Button({ text, style, disabled, onBtnClick }: ButtonProps) {
  return (
    <button
      className="Button"
      style={style}
      disabled={disabled || false}
      onClick={onBtnClick}
    >
      {text}
    </button>
  );
}
export default Button;
