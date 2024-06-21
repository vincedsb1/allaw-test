import React from "react";
import "../../styles/ButtonPrimary.css";

interface ButtonPrimaryProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label: string;
  disabled?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  startIcon,
  endIcon,
  label,
  disabled = false,
}) => {
  return (
    <button
      className={`button-primary ${disabled ? "button-primary-disabled" : "button-primary-enabled"}`}
      disabled={disabled}
    >
      {startIcon && <span className="button-primary-icon">{startIcon}</span>}
      <span className="button-primary-label">{label}</span>
      {endIcon && <span className="button-primary-icon">{endIcon}</span>}
    </button>
  );
};

export default ButtonPrimary;
