// app/components/styled/StyledText.tsx
import React from "react";
import classNames from "classnames";

interface StyledTextProps {
  variant: "title" | "subtitle" | "paragraph" | "small";
  children: React.ReactNode;
  className?: string;
}

const StyledText: React.FC<StyledTextProps> = ({ variant, children, className = "" }) => {
  const baseClass = classNames({
    "text-title": variant === "title",
    "text-normal": variant === "paragraph" || variant === "subtitle",
    "text-small": variant === "small",
  }, className);

  // Map the variant to an HTML tag
  const Tag = variant === "title"
    ? "h1"
    : variant === "subtitle"
    ? "h2"
    : variant === "paragraph"
    ? "p"
    : "small";

  return <Tag className={baseClass}>{children}</Tag>;
};

export default StyledText;
