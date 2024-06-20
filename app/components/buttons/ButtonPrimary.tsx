import React from "react";

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
      className={`flex items-center justify-center gap-2 w-57 h-[42px] px-4 py-2 rounded-full transition-colors duration-200
        ${
          disabled
            ? "bg-[#B9B9B9] bg-opacity-50 text-[#9B9B9B] cursor-not-allowed"
            : "bg-[#171E25] text-white"
        }
        ${
          !disabled &&
          "hover:bg-[#1985E8] active:bg-[#1985E8] active:opacity-70"
        }
      `}
      disabled={disabled}
    >
      {startIcon && (
        <span className="flex items-center w-5 h-5 ml-1 text-white">
          {startIcon}
        </span>
      )}
      <span className="font-open-sans font-medium text-14 leading-22 tracking-wider">
        {label}
      </span>
      {endIcon && (
        <span className="flex items-center w-5 h-5 mr-1 text-white">
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default ButtonPrimary;
