import React from "react";
import { StyledButton } from "./styled";

export const Button = ({ children, onClick, type, className }) => {
  return (
    <StyledButton type={type} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};
