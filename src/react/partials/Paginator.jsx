import React, { useState, useReducer, useEffect } from "react";

const Button = ({ children, ...props }) => {
    return <button className = "buttonStyle" {...props}>{ children }</button>
}

const ItemList = (props) => {
    return <ul>
        { items.map(item => <li>{ item }</li>)}
    </ul>
}

const Loading = () => {
    return <h3>Loading...</h3>
}

const PaginatorContent = ({ data }) => {

    const paginatorCoreStyles = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridAutoRows: "50px",
        gridArea: "content"
    }

    console.log(data)

    return (
        <ul style = { paginatorCoreStyles }>
            { data.map(item => <li key = {item.name}>{ item.name }</li>)}
        </ul>
    )
}

let DEFAULT_DATA = (new Array(36)).fill(0).map((_, i) => { return { name: `Design ${i}`}});

export const Paginator = ({ data = [], maxPerPage = 12, ...props }) => {

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ items, setItems ] = useState(data);

    const [ maxPages, setMaxPages ] = useState(Math.ceil(data.length / maxPerPage));

    useEffect(() => {
        console.log("Setting data to:");
        console.log(DEFAULT_DATA);
        setTimeout(() => {
            setItems(DEFAULT_DATA)
        }, 1000);
    }, [])

    useEffect(() => {
        console.log("Setting max pages...")
        console.log(`Data length is now ${items.length}`)
        console.log(items);
        setMaxPages(Math.ceil(items.length / maxPerPage))
    }, [items])

    const startIndex = (currentPage - 1) * maxPerPage;
    const endIndex = (currentPage) * maxPerPage;
    const currentData = items.slice(startIndex, endIndex);

    const paginatorStyle = {
        display: "grid",
        gridTemplateColumns: "10% 30% 10%",
        gridTemplateAreas: "left-blade content right-blade"
    }

    return (
        <div className="Paginator" style = { paginatorStyle }>
            { 
                (currentData.length !== 0)
                ? <PaginatorContent data = { currentData } />
                : <Loading />
            }
            <Button
                onClick = { () => setCurrentPage((currentPage < 2)
                                            ? currentPage
                                            : currentPage - 1) }
                disabled = { currentPage < 2 }
                style = {{gridArea: "left-blade"}}
                >Back</Button>
            <Button
                onClick = { () => {
                    console.log(`Setting current page to ${currentPage + 1}`)
                    console.log(`maxPages is ${maxPages}`)
                    setCurrentPage((currentPage >= maxPages)
                                    ? currentPage
                                    : currentPage + 1)
                                } }
                disabled = { currentPage >= maxPages }
                style = {{gridArea: "right-blade"}}
                >Next</Button>
        </div>
    )
}