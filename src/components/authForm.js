import React from 'react';
import {Typography, Button, Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


function AuthForm({onSubmit, handleRegForm}) {
    return (
        <Paper
            elevation={3}
            className="form-block"
        >
                <Typography variant="h4"  className='form-title'>Войти</Typography>
                <form noValidate autoComplete="off" className='form'>
                    <div className="inputs">
                        <div className="input-wrap">
                            <TextField id="standard-basic" label="Email" className='input'/>
                        </div>
                        <div className="input-wrap">
                            <TextField
                                id="standard-basic"
                                label="Пароль"
                                className='input'
                                type='password'
                            />
                            <a href="#" className='link link-gray'>Забыли пароль?</a>
                        </div>

                    </div>
                    <Button
                        variant="contained"
                        fullWidth={true}
                        className='button'
                        onClick={() => onSubmit('main')}
                    >
                        Войти
                    </Button>
                    <div className="links">
                        <a href="#" className='link link-gray'>Новый пользователь? </a>
                        <a href="#" onClick={handleRegForm} className='link link-yellow'>Регистрация</a>
                    </div>
                </form>
        </Paper>
    );
}

export default AuthForm;
