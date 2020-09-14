import React, { useContext, useState } from "react";
import { Title, Content } from "./Layout";
import { Paginator, PaginatorContext } from "./Paginator";
import { OccasionList } from "./SetOccasion";

const SetDesign = () => {
    const { currentPage } = useContext(PaginatorContext);
    const [ designs, setDesigns ] = useState([]);

    return (
        <>
            <Title>{ currentPage + 1 }: Choose a card design!</Title>
            <Content>
                <Paginator data ={ designs } maxPerPage={ 10 }>

                </Paginator>
            </Content>
        </>
    )
}

export default SetDesign;