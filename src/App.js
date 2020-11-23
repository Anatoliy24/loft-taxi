import React, {useState} from 'react';

import './styles/style.scss';
import {StylesProvider} from '@material-ui/core/styles';
import Main from "./pages/main";
import Header from "./components/header";
import Login from "./pages/login";
import Profile from "./pages/profile";



function App() {
    const [page, setPage] = useState('login');
    const header = <Header onNavigate={(pageName) => setPage(pageName)}/>
    const pages = {
        login: <Login onSubmit={(pageName) => setPage(pageName)}/>,
        main: <Main/>,
        profile: <Profile/>

    };
    return (
        <StylesProvider injectFirst>

            {page !== 'login' && (
                <div>
                    {header}
                </div>
            )}
            {
                pages[page]
            }

        </StylesProvider>
    );


}

export default App;
