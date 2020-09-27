import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import Dashboard from "./Dashboard";
import RequireLogin from "./Login";

const Loading = () => {
    return <h1>Loading...</h1>
}

const SignCard = () => {
    const { cardId } = useParams();

    return (
        <h1>{ cardId }</h1>
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
                    <React.Suspense fallback={ <Loading /> }>
                        <SignCard />
                    </React.Suspense>
                </Route>
            </Switch>
        </RequireLogin>
    )
}