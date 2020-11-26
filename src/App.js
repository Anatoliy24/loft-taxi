import React, {useState} from 'react';
import './styles/style.scss';
import {StylesProvider} from '@material-ui/core/styles';
import Main from "./pages/main";
import Header from "./components/header";
import Login from "./pages/login";
import Profile from "./pages/profile";
import {AuthContext} from "./context";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [page, setPage] = useState(
        isLoggedIn ? 'main' : 'login'
        );
    const header = <Header onNavigate={(pageName) => setPage(pageName)}/>
    const pages = {
        login: <Login/>,
        main: <Main/>,
        profile: <Profile/>

    };
    const onSubmitLogin = () => {
        setIsLoggedIn(true);
        setPage('main')
    };
    const onSubmitLogout = () => {
        setIsLoggedIn(false);
        setPage('login')

    };
    return (
        <AuthContext.Provider value={{
            onSubmitLogin,
            onSubmitLogout
        }}>
            <StylesProvider injectFirst>

                {page !== 'login' && (
                    <div>
                        {header}
                    </div>
                )}
                {
                    !isLoggedIn
                    ?
                    pages.login
                    :
                    pages[page]
                }


            </StylesProvider>
        </AuthContext.Provider>
    );


}

export default App;
