import React, {useState} from 'react';
import './styles/style.scss';
import {StylesProvider} from '@material-ui/core/styles';
import Main from "./pages/Main";
import Header from "./components/header";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import {AuthContext} from "./context";

const emailDefault = 'myemail@email';
const passwordDefault = '123'


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
    const onSubmitLogin = (email, password, messageErrorChange) => {
        if(email == emailDefault && password == passwordDefault){
            setIsLoggedIn(true);
            setPage('main')
        }else{
            messageErrorChange()
        }
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
