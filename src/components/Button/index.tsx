import React from "react";

import { ButtonWrapper } from "./styles";

interface IButton {
  onClick?: () => void;
  disabled?: boolean | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  children?: any;
}

const Button = ({ onClick, disabled, type, children }: IButton) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled} type={type}>
      {children}
    </ButtonWrapper>
  )
};

export default Button;
