import React, {useContext} from 'react';
import {Typography, Button, Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'
import {AuthContext} from "../context";



AuthForm.propTypes ={
    email: PropTypes.string.isRequired,
    password: PropTypes.any.isRequired
}



function AuthForm({handleRegForm}, props) {
    const {onSubmitLogin} = useContext(AuthContext);

    return (
        <Paper
            elevation={3}
            className="form-block"
        >
                <Typography variant="h4"  className='form-title'>Войти</Typography>
                <form noValidate autoComplete="off" className='form'>
                    <div className="inputs">
                        <div className="input-wrap">
                            <TextField
                                id="standard-basic"
                                label="Email"
                                className='input'
                                value={props.email}
                            />
                        </div>
                        <div className="input-wrap">
                            <TextField
                                id="standard-basic"
                                label="Пароль"
                                className='input'
                                type='password'
                                value={props.password}


                            />
                            <a href="#" className='link link-gray'>Забыли пароль?</a>
                        </div>

                    </div>
                    <Button
                        variant="contained"
                        fullWidth={true}
                        className='button'
                        onClick={() => onSubmitLogin()}
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
