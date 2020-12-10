import React, {useState} from 'react';
import RegistrationForm from "../components/registrationForm";
import LogoBig from "../components/svg/logoBig";



function Registration() {

    return (
        <div className="login-page">
            <div className="login-page__left">
                <LogoBig/>
            </div>
            <div className="login-page__right">
                <RegistrationForm />
            </div>
        </div>
    );
}

export default Registration;
