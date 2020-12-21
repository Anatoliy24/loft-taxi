import React, {useEffect, useState} from 'react';
import {Typography, Button, Paper, TextField} from '@material-ui/core';
import InputMask from 'react-input-mask';
import LogoCard from "../components/svg/logoCard";
import IdCard from "../components/svg/idCard";
import LabelCard from "../components/svg/labelCard";
import {PROFILE_DATA_SAVE} from "../actions/profileAction";
import {useDispatch, useSelector} from 'react-redux'
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";


function Profile() {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile)
    const token = useSelector((state) => state.auth.token)
    const [nameUser, setNameUser] = useState(profile.nameUser)
    const [numberCard, setNumberCard] = useState(profile.numberCard)
    const [expiryDate, setExpiryDate] = useState(profile.expiryDate)
    const [cvc, setCvc] = useState(profile.cvc)
    const history = useHistory();

    const onSubmitSaveData = () => {
        dispatch({
            type: PROFILE_DATA_SAVE,
            payload: {nameUser: nameUser, numberCard: numberCard, expiryDate: expiryDate, cvc: cvc, token}
        })

        localStorage.setItem('nameUser', nameUser);
        localStorage.setItem('numberCard', numberCard);
        localStorage.setItem('expiryDate', expiryDate);
        localStorage.setItem('cvc', cvc);
        localStorage.setItem('token', token);
        history.push("/main");

    }


    return (
        <div className="main">
            <div className="map"></div>
            <Paper
                elevation={3}
                className="profile-block"
            >
                <div data-testid='profile' className="profile-block__top">
                    <Typography variant="h4" className='form-title'>Профиль</Typography>
                    <div className="profile-subtitle">Введите платежные данные</div>
                </div>
                <form onSubmit={handleSubmit(onSubmitSaveData)} autoComplete="off" className='form'>
                    <div className="profile-block__wrap">
                        <div className="profile-block__left">
                            <div className="inputs">
                                <div className="input-wrap">
                                    <TextField
                                        name='profileName'
                                        id="standard-basic"
                                        label="Имя владельца"
                                        className='input'
                                        value={nameUser}
                                        inputRef={register({ required: true })}
                                        onChange={(e) => {
                                            setNameUser(e.target.value)
                                        }}
                                    />
                                    {errors.profileName && <span className='message-error'>Необходимо заполнить поле</span>}

                                </div>
                                <div className="input-wrap">
                                    <InputMask
                                        name='profileNumberCard'
                                        mask="9999 9999 9999 9999"
                                        maskChar={null}
                                        value={numberCard}
                                        onChange={(e) => setNumberCard(e.target.value)}
                                    >
                                        {(inputProps) => <TextField
                                            id="standard-basic"
                                            label="Номер карты"
                                            className='input'
                                            inputRef={register({ required: true })}
                                            value={inputProps.numberCard}
                                            name={inputProps.name}
                                            {...inputProps}
                                        />}
                                    </InputMask>
                                    {errors.profileNumberCard && <span className='message-error'>Необходимо заполнить поле</span>}

                                </div>
                                <div className="inputs-parts">
                                    <div className="inputs-part">
                                        <div className="input-wrap">
                                            <InputMask
                                                name='profileExpiryDate'
                                                mask="99/99"
                                                maskChar={null}
                                                onChange={(e) => setExpiryDate(e.target.value)}
                                                value={expiryDate}
                                            >
                                                {(inputProps) => <TextField
                                                    id="standard-basic"
                                                    label="MM/YY"
                                                    className='input'
                                                    inputRef={register({ required: true })}
                                                    value={inputProps.expiryDate}
                                                    name={inputProps.name}
                                                    {...inputProps}
                                                />}
                                            </InputMask>
                                            {errors.profileExpiryDate && <span className='message-error'>Необходимо заполнить поле</span>}
                                        </div>
                                    </div>
                                    <div className="inputs-part">
                                        <div className="input-wrap">
                                            <InputMask
                                                name='profileCVC'
                                                mask="999"
                                                value={cvc}
                                                maskChar={null}
                                                onChange={(e) => setCvc(e.target.value)}
                                            >
                                                {(inputProps) => <TextField
                                                    id="standard-basic"
                                                    label="CVC"
                                                    className='input'
                                                    inputRef={register({ required: true})}
                                                    value={inputProps.cvc}
                                                    name={inputProps.name}
                                                    {...inputProps}
                                                />}
                                            </InputMask>
                                            {errors.profileCVC && <span className='message-error'>Необходимо заполнить поле</span>}


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-block__right">
                            <Paper
                                elevation={5}
                                className="card"
                            >
                                <div className="card-top">
                                    <LogoCard/>
                                    <div className="card-date">{expiryDate}</div>
                                </div>
                                <div className="card-number">{numberCard}</div>
                                <div className="card-bottom">
                                    <IdCard/>
                                    <LabelCard/>
                                </div>
                            </Paper>
                        </div>
                    </div>
                    <div className="button-wrap">
                        <Button
                            variant="contained"
                            className='button'
                            type='submit'
                        >Сохранить</Button>
                    </div>

                </form>

            </Paper>
        </div>
    );
}

export default Profile;
