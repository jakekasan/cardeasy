import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { CardStore } from "./../utils/Store";
import { UserContext } from "../utils/User";
import { SessionContext } from "../utils/Session";
import createResource from "../utils/createResource";

const ShimmeringDetails = styled.div`
    flex: 2 0 50px;
    height: 50px;
    background-color: grey;
    display: grid;
    place-items: center;
    color: red;
`;

const CardBlock = styled(Link).attrs({tag: "div"})`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px;
    margin: 10px;
    transition: 0.2s;
    background-color: white;
    border: 1px solid grey;
    color: inherit;
    cursor: pointer;
    text-decoration: inherit;

    &:hover {
        background-color: lightgray;
        border: 1px solid red;
    }
`;

const CardInfo = styled.aside`
    flex: 1 0 100px;
    display: flex;
    flex-direction: column;
`;

const CardInfoTitle = styled.h5`
    margin: 0;
    padding: 5px;
    font-size: 0.5rem;
    text-align: left;
`;

const CardInfoContent = styled.p`
    margin: 0;
    padding: 10px;
    display: grid;
    place-items: center;
`;


const CardDetail = ({ title, content }) => {
    return (
        <CardInfo>
            <CardInfoTitle>{ title }</CardInfoTitle>
            <CardInfoContent>{ content }</CardInfoContent>
        </CardInfo>
    )
}

CardDetail.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
}

const ShimmeringCard = ({message}) => {
    return (
        <CardBlock>
            {
                message === undefined
                    ? <ShimmeringDetails/>
                    : <ShimmeringDetails>{ message }</ShimmeringDetails>
            }
        </CardBlock>
    )
}

ShimmeringCard.propTypes = {
    message: PropTypes.string
}

class CardErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            message: null
        }
    }

    static getDerivedStateFromError(err) {
        console.log(err);
        return {
            hasError: true,
            message: "Error fetching..."
        }
    }
    
    render() {
        if (this.state.hasError) {
            return <ShimmeringCard message={ this.state.message } />
        } else {
            return this.props.children
        }
    }
}

const Card = ({ resource }) => {

    const { url } = useRouteMatch();
    
    console.log("Card attempting to access resource...");
    const result = resource.read()
    console.log("Card rendering with", { result })

    function makeCardLink(cardId) {
        return `${url}/${cardId}`
    }

    return (
        <CardBlock to={ makeCardLink(result.id) }>
            <CardDetail title={ "From:" } content={ result.sender.name } />
            <CardDetail title={ "To:" } content={ result.recipient.name } />
            <CardDetail title={ "Occasion:" } content={ result.occasion.text } />
        </CardBlock>
    )
}

Card.propTypes = {
    resource: PropTypes.shape({
        read: PropTypes.func
    })
}


CardErrorHandler.propTypes = {
    children: PropTypes.oneOf([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

const FetchableCard = ({ id }) => {

    const { session } = useContext(SessionContext);
    const resource = createResource(CardStore.getById(id, session))

    console.log("FetchableCard", { resource })

    return (
        <CardErrorHandler>
            <React.Suspense fallback={ <ShimmeringCard /> }>
                <Card resource={ resource } />
            </React.Suspense>
        </CardErrorHandler>
    )
}


FetchableCard.propTypes = {
    id: PropTypes.number
}


const DashboardWelcome = styled.h5`

`;

const CardList = styled.ul`
    margin: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    list-style: none;
`;

const CardListItem = styled.li``;

const Dashboard = () => {
    
    const { resource, userId } = useContext(UserContext);
    // const { session } = useContext(SessionContext);
    console.log("Dashboard reading user resource", {userId, resource});

    const { name, cards } = resource.read();

    console.log("Rendering user dashboard", {name, cards})


    return (
        <>
        <DashboardWelcome>Welcome, { name }</DashboardWelcome>
        <CardList>
            {
                cards && cards || []
                            .map(card => <CardListItem key={ card.id }><FetchableCard id={ card.id }/></CardListItem>)
            }
        </CardList>
        </>
    )
}

Dashboard.propTypes = {
    name: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.number)
}

export default Dashboard;