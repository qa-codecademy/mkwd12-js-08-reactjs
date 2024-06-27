import { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  disabled?: boolean;
  style?: React.CSSProperties;
  onBtnClick: () => void;
  children: ReactNode;
}

function Button({ style, disabled, onBtnClick, children }: ButtonProps) {
  return (
    <button
      className="Button"
      style={style}
      disabled={disabled || false}
      onClick={onBtnClick}
    >
      {children}
    </button>
  );
}
export default Button;
