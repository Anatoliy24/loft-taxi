import React from 'react';
import {Typography, Button, Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


function RegistrationForm() {
    // state={}
    return (
        <Paper
            elevation={3}
            className="form-block"
        >
            <Typography variant="h4" className='form-title'>Регистрация</Typography>
            <form noValidate autoComplete="off" className='form'>
                <div className="inputs">
                    <div className="input-wrap">
                        <TextField id="standard-basic" label="Email*" className='input'/>
                    </div>
                    <div className="input-wrap">
                        <TextField id="standard-basic" label="Как вас зовут?*" className='input'/>
                    </div>
                    <div className="input-wrap">
                        <TextField
                            id="standard-basic"
                            label="Придумайте пароль*"
                            className='input'
                            type={'password'}
                        />

                    </div>

                </div>
                <Button
                    variant="contained"
                    fullWidth={true}
                    className='button'
                    type='submit'
                    // onSubmit={}
                >
                    Зарегистрироваться
                </Button>
                <div className="links">
                    <a href="#" className='link link-gray'>Уже зарегестрированны? </a>
                    <a href="#" className='link link-yellow'>Войти </a>
                </div>
            </form>
        </Paper>
    );
}

export default RegistrationForm;
