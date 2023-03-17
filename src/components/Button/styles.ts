import styled from "styled-components";

interface IButtonWrapper { }

export const ButtonWrapper = styled.button`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    width: 384px;
    height: 48px;
    background: #7B86FF;
    border-radius: 4px;
    border-width: 0px;
    color: #FFFFFF;
    cursor: pointer;
    &:hover {
      background: #A3CBFF;
  }
  &:focus{
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    border-inline-end-width: 1px;
    outline: 0;
    }
`;
