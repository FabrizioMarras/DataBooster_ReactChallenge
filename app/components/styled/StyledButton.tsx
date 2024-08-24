import React from "react";
import classNames from "classnames";

interface StyledButtonProps {
  isPrimary?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ isPrimary = true, children, onClick }) => {
  return (
    <button
      className={classNames(
        "rounded-custom px-4 py-2 transition-colors duration-100",
        {
          "bg-secondary border-2 border-secondary text-white text-normal text-bold hover:bg-primary hover:border-2 hover:border-secondary hover:text-white px-8 py-2": isPrimary,
          "bg-white border-2 border-white text-primary text-small hover:bg-primary hover:border-2 hover:text-white px-8 py-2": !isPrimary,
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default StyledButton;
