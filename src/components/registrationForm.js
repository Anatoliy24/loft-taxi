import React, {useState} from 'react';
import {Typography, Button, Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import {fetchRegRequest} from "../actions/authAction";
import {useDispatch} from "react-redux";
import { useForm } from "react-hook-form";


RegistrationForm.propTypes ={
    email: PropTypes.string,
    name: PropTypes.string,
    password: PropTypes.string
}


function RegistrationForm(props) {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')
    const [password, setPassword] = useState('')
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = () =>{
        dispatch(fetchRegRequest({email, password, name, surName}))
    }
    return (
        <Paper
            elevation={3}
            className="form-block"
        >
            <Typography variant="h4" className='form-title'>Регистрация</Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className='form'>
                <div className="inputs">
                    <div className="input-wrap">
                        <TextField
                            name='regEmail'
                            id="standard-basic"
                            label="Email*"
                            className='input'
                            value={email}
                            inputRef={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i })}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.regEmail && <span className='message-error'>Вы ввели некорректный e-mail</span>}

                    </div>
                    <div className="input-wrap">
                        <TextField
                            name='regFirstName'
                            id="standard-basic"
                            label="Как вас зовут?*"
                            className='input'
                            value={name}
                            inputRef={register({ required: true })}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.regFirstName && <span className='message-error'>Необходимо заполнить поле</span>}

                    </div>
                    <div className="input-wrap">
                        <TextField
                            name='regSurName'
                            id="standard-basic"
                            label="Как ваша фамилия?*"
                            className='input'
                            value={surName}
                            inputRef={register({ required: true })}
                            onChange={(e) => setSurName(e.target.value)}
                        />
                        {errors.regSurName && <span className='message-error'>Необходимо заполнить поле</span>}

                    </div>
                    <div className="input-wrap">
                        <TextField
                            name='regPassword'
                            id="standard-basic"
                            label="Придумайте пароль*"
                            className='input'
                            type='password'
                            value={password}
                            inputRef={register({ required: true })}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.regPassword && <span className='message-error'>Необходимо заполнить поле</span>}


                    </div>

                </div>
                <Button
                    variant="contained"
                    fullWidth={true}
                    className='button'
                    type='submit'
                >
                    Зарегистрироваться
                </Button>
                <div className="links">
                    <a href="#" className='link link-gray'>Уже зарегестрированны? </a>
                    <Link className='link link-yellow' to='/login'>Войти</Link>
                </div>
            </form>
        </Paper>
    );
}

export default RegistrationForm;
