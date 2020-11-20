import React from 'react';
import './styles/style.scss';
// import { Paper } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import Main from "./pages/main";
import Header from "./components/header";
import Login from "./pages/login";
import Profile from "./pages/profile";

function App() {
    const [page, setPage] = React.useState('login');
    const header = <Header onNavigate={(pageName)=>setPage(pageName)}/>
    const loginPage = <Login onSubmit={(pageName)=>setPage(pageName)}/>

    switch(page) {
        case 'login':
            return (
                <StylesProvider injectFirst>
                    <div>
                        {loginPage}
                    </div>
                </StylesProvider>
            );
        case 'main':
            return (
                <StylesProvider injectFirst>
                    <div>
                        {header}
                        <Main/>
                    </div>
                </StylesProvider>
            );

        case 'profile':
            return (
                <StylesProvider injectFirst>
                    <div>
                        {header}
                        <Profile/>
                    </div>
                </StylesProvider>
            );

        default:
            return (
                <StylesProvider injectFirst>
                    <div>
                        {loginPage}

                    </div>
                </StylesProvider>
            );
    }
    //
    // if(isLogin){
    //     return (
    //
    //         <StylesProvider injectFirst>
    //             <div>
    //                 {isLogin
    //                     ?
    //                     <Login/>
    //                     :
    //                     <Header/>
    //                     <Main/>
    //                     <Profile/>
    //                 }
    //
    //
    //             </div>
    //         </StylesProvider>
    //     );
    //     :
    //     <Header/>
    //     <Main/>
    //     <Profile/>
    // }
  //   return (
  //
  //     <StylesProvider injectFirst>
  //     <div>
  //         {isLogin
  //           ?
  //             <Login/>
  //           :
  //             <Header/>
  //             <Main/>
  //             <Profile/>
  //         }
  //
  //
  //     </div>
  //     </StylesProvider>
  // );
}

export default App;
