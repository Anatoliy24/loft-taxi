import React from 'react';
import './styles/style.scss';
// import { Paper } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import Main from "./screens/main";
import Header from "./components/header";
import Login from "./screens/login";

function App() {
  return (
      <StylesProvider injectFirst>
      <div>
          {/*<Header/>*/}
          {/*<Main/>*/}


          <Login/>
      </div>
      </StylesProvider>
  );
}

export default App;
