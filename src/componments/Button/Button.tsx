import React from "react";
import styles from "./Button.module.css";
// 123
interface Props {
  children: string;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "secondary" }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
