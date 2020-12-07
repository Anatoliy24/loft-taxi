import React, {useState} from 'react';
import {Typography, Button, Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import {fetchRegRequest} from "../actions/actionAuth";
import {useDispatch} from "react-redux";

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
    const dispatch = useDispatch();
    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(fetchRegRequest({email, password, name, surName}))
    }
    return (
        <Paper
            elevation={3}
            className="form-block"
        >
            <Typography variant="h4" className='form-title'>Регистрация</Typography>
            <form onSubmit={onSubmit} noValidate autoComplete="osdfsdff" className='form'>
                <div className="inputs">
                    <div className="input-wrap">
                        <TextField
                            id="standard-basic"
                            label="Email*"
                            className='input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div className="input-wrap">
                        <TextField
                            id="standard-basic"
                            label="Как вас зовут?*"
                            className='input'
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>
                    <div className="input-wrap">
                        <TextField
                            id="standard-basic"
                            label="Как ваша фамилия?*"
                            className='input'
                            value={surName}
                            onChange={(e) => setSurName(e.target.value)}

                        />
                    </div>
                    <div className="input-wrap">
                        <TextField
                            id="standard-basic"
                            label="Придумайте пароль*"
                            className='input'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />

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
