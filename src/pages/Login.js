import React from 'react';
import AuthForm from "../components/authForm";
import LogoBig from "../components/svg/logoBig";


function Login() {
    return (
        <div className="login-page">
            <div className="login-page__left">
                <LogoBig/>
            </div>
            <div className="login-page__right">
                <AuthForm/>,
            </div>
        </div>
    );
}

export default Login;
