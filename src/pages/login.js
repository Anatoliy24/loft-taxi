import React, {useState} from 'react';
import AuthForm from "../components/authForm";
import RegistrationForm from "../components/registrationForm";
import LogoBig from "../components/svg/logoBig";



function Login({onSubmit}) {
    const [authForm, setAuthForm] = useState('loginForm');
    const handleAuthForm = () => {
        setAuthForm('loginForm');
    };
    const handleRegForm = () => {
        setAuthForm('regForm');
    };
    const forms = {
        loginForm: <AuthForm onSubmit={onSubmit} handleRegForm={handleRegForm}/>,
        regForm: <RegistrationForm onSubmit={onSubmit} handleAuthForm={handleAuthForm}/>
    }



    return (
        <div className="login-page">
            <div className="login-page__left">
                <LogoBig/>
            </div>
            <div className="login-page__right">
                {
                    forms[authForm]
                }
            </div>
        </div>
    );
}

export default Login;
