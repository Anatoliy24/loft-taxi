import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Typography, Button, Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'
import {fetchAuthRequest} from "../actions/authAction";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";

AuthForm.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string
}

function AuthForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const messageError = useSelector((state) => state.auth.messageError)
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        dispatch(fetchAuthRequest({email, password}))

    }

    return (
        <Paper
            elevation={3}
            className="form-block"
        >
            <Typography variant="h4" className='form-title'>Войти</Typography>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className='form'>
                <div className="inputs">
                    <div className="input-wrap">
                        <TextField
                            name='loginEmail'
                            id="standard-basic"
                            label="Email"
                            className='input'
                            value={email}
                            inputRef={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i })}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.loginEmail && <span className='message-error'>Вы ввели некорректный e-mail</span>}
                    </div>
                    <div className="input-wrap">
                        <TextField
                            name='loginPassword'
                            id="standard-basic"
                            label="Пароль"
                            className='input'
                            type='password'
                            value={password}
                            inputRef={register({ required: true })}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                        {errors.loginPassword && <span className='message-error'>Вы ввели неверный пароль</span>}

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
                {messageError
                    ?
                    <div className="message-error--form">Вы ввели некорректный e-mail или пароль</div>
                    :
                    null
                }
                <div className="links">
                    <a href="#" className='link link-gray'>Новый пользователь? </a>
                    <Link className='link link-yellow' to='/reg'>Регистрация</Link>
                </div>
            </form>
        </Paper>
    );
}


export default AuthForm;
