import React from "react";
import { SelectWrapper } from './styles'

interface IDropdown { }

const Dropdown = ({ }: IDropdown) => {
    return (
        <SelectWrapper>
            <option hidden>{" "}</option>
            <option value={1}>selec 1</option>
            <option value={2}>selec 2</option>
            <option value={3}>selec 3</option>
            <option value={4}>selec 4</option>
        </SelectWrapper>

    )
};

export default Dropdown;



