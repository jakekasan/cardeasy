import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import Dashboard from "./Dashboard";
import RequireLogin from "./Login";
import createResource from "./../utils/createResource";
import { CardStore } from "./../utils/Store";

const Loading = () => {
    return <h1>Loading...</h1>
}

const SignCard = () => {
    const { cardId } = useParams();

    const cardResource = createResource(CardStore.getById(cardId))

    return (
        <React.Suspense fallback={ <Loading /> }>
            <LoadCard>{ cardId }</LoadCard>
        </React.Suspense>
    )
}

export const NewSignCard = () => {
    const { url } = useRouteMatch();

    return (
        <RequireLogin>
            <Switch>
                <Route exact path={ url }>
                    <React.Suspense fallback={ <Loading /> }>
                        <Dashboard />
                    </React.Suspense>
                </Route>
                <Route path={ url + "/:cardId"}>
                    {/* <React.Suspense fallback={ <Loading /> }> */}
                    <SignCard />
                    {/* </React.Suspense> */}
                </Route>
            </Switch>
        </RequireLogin>
    )
}