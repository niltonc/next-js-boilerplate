import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import eyeClosedIcon from "../../assets/svg/outline/essentials/eye-closed.svg";
import eyeOpenIcon from "../../assets/svg/outline/essentials/eye-open.svg";

import { InputWrapper, InputField, EyeIcon, Text } from "./styles";

interface ITextInput {
  type?: any;
  label?: string;
  placeholder?: string;
  width: string | number;
  height: string | number;
  fontSize: string | number;
}

const TextInput = ({
  type,
  placeholder,
  label,
  width,
  height,
  fontSize,
}: ITextInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <InputWrapper width={width}>
      {label && <Text>{label}</Text>}
      <InputField
        type={isPasswordVisible ? "text" : type}
        placeholder={placeholder}
        height={height}
        fontSize={fontSize}
      />
      {type === "password" && (
        <EyeIcon onClick={togglePasswordVisibility}>
          {isPasswordVisible ? (
            <Image
              src={eyeClosedIcon}
              width={24}
              height={24}
              alt="invisible" />
          ) : (
            <Image
              src={eyeOpenIcon}
              width={24}
              height={24}
              alt="visible" />
          )}
        </EyeIcon>
      )}
    </InputWrapper>
  );
};

export default TextInput;
