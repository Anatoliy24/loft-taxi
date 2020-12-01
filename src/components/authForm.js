import React, {useContext, useState} from 'react';
import {Typography, Button, Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'
import {AuthContext} from "../context";



AuthForm.propTypes ={
    email: PropTypes.string,
    password: PropTypes.string
}

function AuthForm(props) {
    const [email, setEmail] = useState(props.email || '')
    const [password, setPassword] = useState(props.password || '')
    const [messageError, setMessageError] = useState(false)
    const {onSubmitLogin} = useContext(AuthContext);
    const onSubmit = (e) =>{
        e.preventDefault();
        onSubmitLogin(email, password, messageErrorChange)
    }
    const messageErrorChange = () =>{
        setMessageError(true)
    }

    return (
        <Paper
            elevation={3}
            className="form-block"
        >
                <Typography variant="h4"  className='form-title'>Войти</Typography>
                <form onSubmit={onSubmit} noValidate autoComplete="off" className='form'>
                    <div className="inputs">
                        <div className="input-wrap">
                            <TextField
                                id="standard-basic"
                                label="Email"
                                className='input'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-wrap">
                            <TextField
                                id="standard-basic"
                                label="Пароль"
                                className='input'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {messageError
                                ?
                                <div className="message-error">Вы ввели некорректный e-mail или пароль</div>
                                :
                                null
                            }
                            <a href="#" className='link link-gray'>Забыли пароль?</a>
                        </div>

                    </div>
                    <Button
                        variant="contained"
                        fullWidth={true}
                        className='button'
                        type='submit'

                    >
                        Войти
                    </Button>
                    <div className="links">
                        <a href="#" className='link link-gray'>Новый пользователь? </a>
                        <a href="#" onClick={props.handleRegForm} className='link link-yellow'>Регистрация</a>
                    </div>
                </form>
        </Paper>
    );
}


export default AuthForm;
