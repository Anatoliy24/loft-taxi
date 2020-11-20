import React from 'react';
import './styles/style.scss';
import {StylesProvider} from '@material-ui/core/styles';
import Main from "./pages/main";
import Header from "./components/header";
import Login from "./pages/login";
import Profile from "./pages/profile";

function App() {
    const [page, setPage] = React.useState('login');
    const header = <Header onNavigate={(pageName) => setPage(pageName)}/>
    const loginPage = <Login onSubmit={(pageName) => setPage(pageName)}/>


    return (
        <StylesProvider injectFirst>
            {page !== 'login'
                ?
                <div>
                    {header}
                </div>
                :
                null
            }
            {page == 'login'
                ?
                <div>
                    {loginPage}
                </div>
                : page == 'main'
                ?
                    <div>
                        <Main/>
                    </div>
                : page == 'profile'
                    ?
                    <div>
                        <Profile/>
                    </div>
                :
                    <div>
                        {loginPage}
                    </div>
            }
        </StylesProvider>
    );


}

export default App;
