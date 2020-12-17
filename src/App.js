import React, {useEffect, useRef} from 'react';
import './styles/style.scss';
import {StylesProvider} from '@material-ui/core/styles';
import Main from "./pages/Main";
import Header from "./components/header";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import {useSelector} from 'react-redux';
import {Switch, Route, useHistory} from 'react-router-dom';
import Registration from "./pages/Registration";
import {PrivateRouter} from "./components/privateRouter";


function App() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const history = useHistory();
    const header = <Header/>;
    const mounted = useRef();

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            if (isLoggedIn) {
                history.push("/main");
            } else {
                history.push("/login");
            }
        }


    }, [isLoggedIn]);

    return (
        <StylesProvider injectFirst>

            {isLoggedIn && (
                <div>
                    {header}
                </div>
            )}

            <Switch>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/reg' component={Registration}/>

                <PrivateRouter
                    path='/main'
                    component={Main}
                    isLoggedIn={isLoggedIn}
                    loginPath='/reg'
                />
                <PrivateRouter
                    path='/profile'
                    component={Profile}
                    isLoggedIn={isLoggedIn}
                    loginPath='/reg'
                />

            </Switch>
        </StylesProvider>
    );


}

export default App;
