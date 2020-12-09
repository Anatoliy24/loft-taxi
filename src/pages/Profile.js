import React, {useState} from 'react';
import {Typography, Button, Paper} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import LogoCard from "../components/svg/logoCard";
import IdCard from "../components/svg/idCard";
import LabelCard from "../components/svg/labelCard";
import {PROFILE_DATA_SAVE} from "../actions/actionProfile";
import {useDispatch, useSelector} from 'react-redux'



function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile )

    const [nameUser, setNameUser] = useState(profile.nameUser)
    const [numberCard, setNumberCard] = useState(profile.numberCard)
    const [dateCard, setDateCard] = useState(profile.dateCard)
    const [cvc, setCvc] = useState(profile.cvc)



    const onSubmitSaveData = (e) =>{
        e.preventDefault();

        dispatch({type: PROFILE_DATA_SAVE, payload:{nameUser:nameUser, numberCard:numberCard, dateCard:dateCard, cvc:cvc}})
        localStorage.setItem('nameUser', profile.nameUser);
        localStorage.setItem('numberCard', profile.numberCard);
        localStorage.setItem('dateCard', profile.dateCard);
        localStorage.setItem('cvc', profile.cvc);
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
                                            <TextField
                                                id="standard-basic"
                                                label="MM/YY"
                                                className='input'
                                                value={dateCard}
                                                onChange={(e) => setDateCard(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="inputs-part">
                                        <div className="input-wrap">
                                            <TextField
                                                id="standard-basic"
                                                label="CVC"
                                                className='input'
                                                value={cvc}
                                                onChange={(e) => setCvc(e.target.value)}
                                            />
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
                                    <div className="card-date">{dateCard}</div>
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
