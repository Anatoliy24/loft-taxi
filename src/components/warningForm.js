import React from 'react';
import {Paper} from '@material-ui/core';
import {Link} from "react-router-dom";


function WarningForm() {
    return (
        <Paper
            elevation={3}
            className="form-info"
        >
            <p className='info-text'>Пожалуйста, заполните данные профиля</p>
            <Link className='link' to='/profile'>Заполнить</Link>
        </Paper>
    );
}

export default WarningForm;
