import React, { useEffect, useReducer } from "react";


const usePagination = ({ maxPage }) => {
    const reducer = (currentPage, action) => {
        switch (action.type) {
            case "next":
                return (currentPage < maxPage) ? ++currentPage : currentPage
            case "back":
                return (currentPage > 0) ? --currentPage : currentPage
            case "jump":
                return (0 < action.jump < maxPage) ? action.jump : currentPage
            default:
                return currentPage
        }
    }

    const [ currentPage, dispatch ] = useReducer(reducer, 0);

    const nextPage = () => dispatch({type: "next"})
    const prevPage = () => dispatch({type: "back"})
    const gotoPage = (pageNumber) => dispatch({type: "jump", jump: pageNumber})

    return {
        currentPage,
        nextPage,
        prevPage,
        gotoPage
    }

}

const MultiPartForm = ({ children }) => {

    const [ isFormChildValid, setIsFormChildValid ] = useState(false);

    const { currentPage, nextPage, prevPage } = usePagination({ maxPage: children.length - 1});

    return (
        <section className="MultiPartForm">
            <article>
                { React.cloneElement( children[state.currentPage], { pageNumber: currentPage + 1, setIsValid: setFromChildValid })}
            </article>
            <button className={ "BackButton" } onClick={ nextPage }>Back</button>
            <button className={ "NextButton" } onClick={ prevPage }>{ (currentPage < children.length - 1) ? "Next" : "Submit" }</button>
        </section>
    )
}

const occasionNames = ["Birthday", "New Child", "Anniversary", "Bar Mitzvah"];

const DEFAULT_OCCASIONS = occasionNames.map((name, i) => {
    return {
        name: name,
        id: i,
        selected: false
    }
})

const DEFAULT_OCCASION = { name: "Unknown Occasion" };

const Occasion = (props) => {
    return <div>{ props.data }</div>
}

export const CardOccasion = ({ occasion = DEFAULT_OCCASION, occasionOnClick: onClick}) => {

    const selected = (occasion.selected) ? " selected" : "";
    return (
        <li className={`CardOccasion${selected}`} id={ occasion.id } onClick={ () => onClick(occasion.id) }>
            <p>{ occasion.name }</p>
        </li>
    )
}

const Paginator = ({data, maxPerPage}) => {
    return (
        <div>
            <content>

            </content>
            <button></button>
            <button></button>
        </div>
        

    )
}

const SetOccasion = () => {
    const [ occasions, setOccasions ] = useState([]);

    useEffect(() => {
        // fetch data here
    }, [])

    return (
        <Paginator data ={ occasions }>
            <Occasion />
        </Paginator>
    )
}

const NewCardForm = () => {
    return (
        <NewCardForm>

        </NewCardForm>
    )
}