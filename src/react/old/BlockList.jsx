import React, { useContext } from "react";
import { PaginatorContext } from "./Paginator";

const Block = ({ id, name, selected } = { isSelected: false }) => {
    return (
        <li className={ "Block" + (selected) ? " selected" : "" }>{ name }</li>
    )
}

const BlockList = () => {
    const { currentView } = useContext(PaginatorContext);

    return (
        <ul className="content BlockList">
            { currentView.map(item => <Block key={item.id} {...item} />)}
        </ul>
    )
}

export {
    Block,
    BlockList
}