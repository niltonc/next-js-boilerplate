import styled from "styled-components";

interface IDropdownParams { }

export const SelectWrapper = styled.select`
  -webkit-appearance: none !important;
    -moz-appearance: none !important;
    background: #ffffff;
    height: 48px;
    width: 100%;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjUgMTAuMDYwN0w3LjU2MDY2IDlMMTIuMDMwMyAxMy40Njk3TDE2LjUgOUwxNy41NjA3IDEwLjA2MDdMMTIuMDMwMyAxNS41OTFMNi41IDEwLjA2MDdaIiBmaWxsPSIjNjM2NTc0Ii8+Cjwvc3ZnPgo=);
    background-position: 100%;
    background-repeat: no-repeat;
    border: 1px solid #a347ff;
    border-radius: 4px;
    padding: 0.5rem;
    padding-left: 12px;
    color: #a347ff;
    gap: 8px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    
    :hover{
    border: 1px solid #7aadff;
    }
    :focus{
    box-shadow: 0 0 0 2px rgba(122, 173, 255, 0.1);
    border-inline-end-width: 1px;
    outline: 0;
    }

  option {
    /* color: #636574; */
    /* background: white; */
    display: flex;
    /* white-space: pre; */
    /* min-height: 40px; */
    /* padding: 0px 2px 1px;    */
  }
`;
