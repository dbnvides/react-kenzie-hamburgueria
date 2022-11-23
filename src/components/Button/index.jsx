import React from "react";
import { StyledButton } from "./styled";

export const Button = ({ children, onClick, type }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
