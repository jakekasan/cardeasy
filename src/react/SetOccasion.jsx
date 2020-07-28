import React, {
    useContext,
    useEffect,
    useState
} from "react";

import { Paginator, BackButton, NextButton, PaginatorContext, BackBlade, NextBlade, Slider } from "./Paginator.jsx";
import { Title, Page, Content } from "./Layout.jsx";
import { Block, BlockList } from "./BlockList";


const occasionNames = ["Birthday", "New Child", "Anniversary", "Bar Mitzvah", "Funeral", "Wedding", "High School Graduation"] // "University Graduation", "Becoming a Grandparent", "Bereavement", "New Star Wars Movie", "Won Lottery"];

const DEFAULT_OCCASIONS = occasionNames.map((name, i) => {
    return {
        name: name,
        id: i,
        selected: false
    }
})

const SetOccasion = () => {

    const [ occasions, setOccasions ] = useState([]);
    const { currentPage, setCanGoNext } = useContext(PaginatorContext);
    
    useEffect(() => {
        console.log("Setting canGoNext to false");
        setCanGoNext(() => false);
        console.log("canGoNext set to false")
        let timeOuts = [
            setTimeout(() => setOccasions(DEFAULT_OCCASIONS), 1000),
            setTimeout(() => setCanGoNext(true), 4000)
        ];
        
        return () => timeOuts.forEach(clearTimeout);
    }, []);

    return (
        <>
            <Title>{ currentPage + 1 }: Choose an occasion for this card!</Title>
            <Content>
                <Paginator data={ occasions } maxPerPage={ 10 }>
                    <BlockList />
                    <Slider />
                </Paginator>
            </Content>
        </>
    )
}

export default SetOccasion