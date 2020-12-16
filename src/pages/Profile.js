import React, {useState} from 'react';
import {Typography, Button, Paper, TextField} from '@material-ui/core';
import InputMask from 'react-input-mask';
import LogoCard from "../components/svg/logoCard";
import IdCard from "../components/svg/idCard";
import LabelCard from "../components/svg/labelCard";
import {PROFILE_DATA_SAVE} from "../actions/profileAction";
import {useDispatch, useSelector} from 'react-redux'


function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile)
    const token = useSelector((state) => state.auth.token)

    const [nameUser, setNameUser] = useState(profile.nameUser)
    const [numberCard, setNumberCard] = useState(profile.numberCard)
    const [expiryDate, setExpiryDate] = useState(profile.expiryDate)
    const [cvc, setCvc] = useState(profile.cvc)

    const onSubmitSaveData = (e) => {
        e.preventDefault();
        dispatch({
            type: PROFILE_DATA_SAVE,
            payload: {nameUser: nameUser, numberCard: numberCard, expiryDate: expiryDate, cvc: cvc, token}
        })

        localStorage.setItem('nameUser', nameUser);
        localStorage.setItem('numberCard', numberCard);
        localStorage.setItem('expiryDate', expiryDate);
        localStorage.setItem('cvc', cvc);
        localStorage.setItem('token', token);


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
                <form onSubmit={onSubmitSaveData} noValidate autoComplete="off" className='form'>
                    <div className="profile-block__wrap">
                        <div className="profile-block__left">
                            <div className="inputs">
                                <div className="input-wrap">
                                    <TextField
                                        id="standard-basic"
                                        label="Имя владельца"
                                        className='input'
                                        value={nameUser}
                                        onChange={(e) => {
                                            setNameUser(e.target.value)
                                        }}
                                    />
                                </div>
                                <div className="input-wrap">
                                    <TextField
                                        id="standard-basic"
                                        label="Номер карты"
                                        className='input'
                                        value={numberCard}
                                        onChange={(e) => setNumberCard(e.target.value)}
                                    />
                                </div>
                                <div className="inputs-parts">
                                    <div className="inputs-part">
                                        <div className="input-wrap">
                                            <InputMask
                                                mask="99/99"
                                                onChange={(e) => setExpiryDate(e.target.value)}
                                                value={expiryDate}

                                            >
                                                {() => <TextField
                                                    id="standard-basic"
                                                    label="MM/YY"
                                                    className='input'
                                                />}
                                            </InputMask>
                                        </div>
                                    </div>
                                    <div className="inputs-part">
                                        <div className="input-wrap">
                                            <InputMask
                                                mask="999"
                                                type='number'
                                                value={cvc}
                                                onChange={(e) => setCvc(e.target.value)}
                                            >
                                                {() => <TextField
                                                    id="standard-basic"
                                                    label="CVC"
                                                    className='input'
                                                />}
                                            </InputMask>

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
