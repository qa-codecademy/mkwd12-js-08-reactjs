import "./Button.css";

interface ButtonProps {
  style?: React.CSSProperties;
  onBtnClick: () => void;
  disabled?: boolean;
  btnText: string;
}

const Button = ({ style, onBtnClick, disabled, btnText }: ButtonProps) => {
  return (
    <button
      style={style}
      className="Button"
      onClick={onBtnClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default Button;
