import styled from "styled-components";

interface IButtonParams { }

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
    background: #A347FF;
    border-radius: 4px;
    border-width: 0px;
    color: #FFFFFF;
    cursor: pointer;
    &:hover {
      background: #7AADFF;
    }
    &:focus{
    box-shadow: 0 0 0 2px rgba(122, 173, 255, 0.1);
    border-inline-end-width: 1px;
    outline: 0;
    }
`;
