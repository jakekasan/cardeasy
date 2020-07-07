import React, {
    useContext,
    useEffect,
    useState
} from "react";

import { Paginator, BackButton, NextButton, PaginatorContext, BackBlade, NextBlade } from "./Paginator.jsx";
import { Title, Page, Content } from "./Layout.jsx";


const occasionNames = ["Birthday", "New Child", "Anniversary", "Bar Mitzvah", "Funeral", "Wedding", "High School Graduation", "University Graduation", "Becoming a Grandparent", "Bereavement", "New Star Wars Movie", "Won Lottery"];

const DEFAULT_OCCASIONS = occasionNames.map((name, i) => {
    return {
        name: name,
        id: i,
        selected: false
    }
})

const DEFAULT_OCCASION = { name: "Unknown Occasion" };

export const CardOccasion = ({ occasion = DEFAULT_OCCASION, occasionOnClick: onClick}) => {

    const selected = (occasion.selected) ? " selected" : "";
    return (
        <li className={`CardOccasion${selected}`} id={ occasion.id } onClick={ () => onClick(occasion.id) }>
            <p>{ occasion.name }</p>
        </li>
    )
}

const Occasion = ({ name }) => <li className="Occasion">{ name }</li>

const OccasionList = () => {
    const { currentView } = useContext(PaginatorContext);

    return (
        <ul className="content OccasionList">
            { currentView.map(occasion => <Occasion key={occasion.id} {...occasion} />)}
        </ul>
    )
}

const SetOccasion = () => {

    const [ occasions, setOccasions ] = useState([]);
    const { currentPage, setCanGoNext } = useContext(PaginatorContext);
    
    useEffect(() => {
        console.log("Setting canGoNext to false");
        setCanGoNext(() => false);
        console.log("canGoNext set to false")
        let timeOuts = [
            setTimeout(() => setOccasions(DEFAULT_OCCASIONS), 3000),
            setTimeout(() => setCanGoNext(true), 5000)
        ];
        
        return () => timeOuts.forEach(clearTimeout);
    }, []);

    return (
        <>
            <Title>{ currentPage + 1 }: Choose an occasion for this card!</Title>
            <Content>
                <Paginator data={ occasions } maxPerPage={ 10 }>
                    <OccasionList />
                    <BackBlade />
                    <NextBlade />
                </Paginator>
            </Content>
        </>
    )
}

export default SetOccasion