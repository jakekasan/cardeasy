import React, {
    useContext,
    useState,
    useReducer,
    useEffect
} from "react";
import styled from "styled-components";


const usePagination = ({items, onLast = () => {}} = {}) => {
    const maxPage = items.length - 1;
    const [currentPage, setCurrentPage] = useState(0);
    const goBack = () => setCurrentPage(cur => Math.max(cur - 1, 0));
    const goNext = () => {
        setCurrentPage(cur => Math.min(cur + 1, maxPage))
        if (currentPage === maxPage) onLast();
    };

    return {
        goBack,
        goNext,
        currentPage
    }
}

const PaginationContext = React.createContext({});

const Pagination = ({ children, onLast }) => {

    const { goBack, goNext, currentPage } = usePagination({items: children, onLast});

    return (
        <PaginationContext.Provider value={ {goBack, goNext, currentPage} }>
            { children[currentPage] }
            <ButtonContainer>
                <BackButton />
                <NextButton />
            </ButtonContainer>
        </PaginationContext.Provider>
    )
}

const ButtonContainer = styled.div`
    width: ${props => props.theme.appWidth}px;
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Button = styled.button`
    padding: 20px;
    background-color: ${props => props.theme.colors.dark.primary};
    color: ${props => props.theme.colors.dark.secondary};
    cursor: pointer;
    border: 1px solid rgba(0,0,0,0);
    border-radius: 25px;
    font-size: 1rem;
    transition: 0.2s;

    &:hover {
        border: 1px solid ${props => props.theme.colors.dark.primary};
        background-color: ${props => props.theme.colors.dark.secondary};
        color: ${props => props.theme.colors.dark.primary};
    }
`;

const BackButton = () => {
    const { goBack } = useContext(PaginationContext);
    return (
        <Button onClick={ () => {
            console.log("BackButton clicked");
            goBack()
            } }>
            Back!
        </Button>
    )
}

const NextButton = () => {
    const { goNext } = useContext(PaginationContext);
    return (
        <Button onClick={ () => {
            console.log("NextButton clicked");
            goNext()
            } }>
            Next!
        </Button>
    )
}

const PaginationButtons = () => {
    return (
        <ButtonContainer>
            <BackButton />
            <NextButton />
        </ButtonContainer>
    )
}

export {
    Pagination,
    PaginationContext,
    PaginationButtons,
    BackButton,
    NextButton
}