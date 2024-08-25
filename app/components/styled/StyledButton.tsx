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
        "btn item-interaction",
        {
          "text-normal text-bold": isPrimary,
          "text-small": !isPrimary,
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default StyledButton;
