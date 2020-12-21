import React from 'react';
import {Button, Paper} from '@material-ui/core';
import {Link} from "react-router-dom";


function WarningForm() {
    return (
        <Paper
            elevation={3}
            className="form-info"
        >
            <p className='info-text'>Пожалуйста, заполните данные профиля</p>
            <Button
                variant="contained"
                fullWidth={true}
                className='button'
                type='button'
            >
                <Link className='link-button' to='/profile'>Заполнить</Link>

            </Button>
        </Paper>
    );
}

export default WarningForm;
