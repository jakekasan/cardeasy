import React, { useEffect } from "react";

const MultiPartForm = ({ children }) => {

    const [ formChildValid, setFromChildValid ] = useState(false);

    const reducer = (state, action) => {
        console.log(`Reducer with state = ${JSON.stringify(state)} and action = ${JSON.stringify(action)}`);
        switch (action.type) {
            case "next":
                if (state.currentPage < children.length - 1) {
                    return { ...state, currentPage: state.currentPage + 1}
                } else {
                    return state
                }


            case "back":
                if (state.currentPage > 0) {
                    return { ...state, currentPage: state.currentPage - 1 }
                } else { 
                    return state
                }

            default:
                return currentPage
        }
    }

    const [ state, dispatch ] = useReducer(reducer, { currentPage: 0});

    const pageNext = () => {
        console.log("Clicked next...")
        dispatch({ type: "next" })
    };

    const pageBack = () => {
        console.log("Clicked back...")
        dispatch({ type: "back" })
    };

    console.log("Rendering page", state.currentPage)

    return (
        <section className="MultiPartForm">
            <article>
                { React.cloneElement( children[state.currentPage], { pageNumber: state.currentPage + 1, setIsValid: setFromChildValid })}
            </article>
            <button className={ "BackButton" } onClick={ pageBack }>Back</button>
            <button className={ "NextButton" } onClick={ pageNext }>{ (state.currentPage < children.length - 1) ? "Next" : "Submit" }</button>
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