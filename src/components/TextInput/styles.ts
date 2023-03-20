import styled from "styled-components";

interface ITextInputParams {
  fontSize?: string | number;
  width?: string | number;
}

export const InputWrapper = styled.div<ITextInputParams>`
  position: relative;
  width: ${props => props.width};
`;
export const InputField = styled.input<ITextInputParams>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;
  gap: 8px;
  width: 100%;
  height: ${props => props.height};
  background: #FFFFFF;
  border: 1px solid #a347ff;
  border-radius: 4px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  color: #a347ff;
  font-size: ${props => props.fontSize};
  :hover{
    border: 1px solid #7aadff;
  }
  :focus{
    box-shadow: 0 0 0 3px rgba(122, 173, 255, 0.1);
    border-inline-end-width: 1px;
    outline: 0;
    }
`;
export const EyeIcon = styled.div`
  position: absolute;
  top: 68%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  background: #FFF;
`;
export const Text = styled.a`
  font-size: 14px;
  font-weight: normal;

`;