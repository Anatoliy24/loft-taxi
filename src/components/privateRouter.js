import React from 'react';
import {Route, RouteComponent, Redirect} from 'react-router-dom';


export const PrivateRouter = ({
                         component: RouteComponent,
                         isLoggedIn,
                         loginPath,
                         ...rest
                     }) => (
    <Route
        {...rest}
        render={(routeProps) =>
            isLoggedIn ? (
                <RouteComponent {...routeProps}/>
            ) : (
                <Redirect to={loginPath}/>
            )}
    />
);





