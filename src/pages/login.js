import React from 'react';
import {Button, Paper, Typography} from "@material-ui/core";
import AuthForm from "../components/authForm";
import RegistrationForm from "../components/registrationForm";
import TextField from "@material-ui/core/TextField";


function Login({onSubmit}) {
    const [authForm, setAuthForm] = React.useState('loginForm');
    const handleAuthForm = () => {
        setAuthForm('loginForm');
    };
    const handleRegForm = () => {
        setAuthForm('regForm');
    };




    return (
        <div className="login-page">
            <div className="login-page__left">
                <svg className='img-logo_big' width="196" height="228" viewBox="0 0 196 228" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6458 163.16L14.8458 169.172H6.13375L7.78975 163.232L16.6458 163.16ZM23.4138 181.844L18.3738 187.964H0.87775L5.52175 171.548H14.2698L11.3898 181.808L23.4138 181.844ZM51.0828 169.208H27.3588C27.8388 167.576 28.6548 166.196 29.8068 165.068C31.2228 163.7 32.6868 163.016 34.1988 163.016H46.4388C49.5348 163.016 51.0828 164.66 51.0828 167.948C51.0828 168.764 51.0828 169.184 51.0828 169.208ZM50.5788 171.512L50.4348 172.088C50.0508 173.336 49.3908 175.616 48.4548 178.928C47.8548 181.016 46.9308 182.768 45.6828 184.184C43.4268 186.728 40.4028 188 36.6108 188H32.3268C30.0228 188 28.1988 187.568 26.8548 186.704C25.1988 185.672 24.3708 184.076 24.3708 181.916C24.3708 180.764 24.5508 179.54 24.9108 178.244L26.7108 171.584H35.0988L32.6148 180.332C32.5188 180.74 32.4708 181.052 32.4708 181.268C32.4708 181.748 32.6868 182.048 33.1188 182.168H38.3388C38.9868 182 39.4668 181.388 39.7788 180.332L42.3708 171.548L50.5788 171.512ZM76.5149 163.16L74.7869 169.208H51.4229L55.2749 163.16H76.5149ZM74.2829 171.548L72.3029 178.136H60.7469L58.0469 187.964H48.5789L53.1509 171.548H74.2829ZM102.46 163.16L100.804 169.136H76.8276L80.6436 163.16H102.46ZM93.1356 171.548L88.7796 187.964H80.5356L84.9996 171.548H93.1356Z" fill="white"/>
                    <path d="M128.792 163.16L127.136 169.136H103.16L106.976 163.16H128.792ZM119.468 171.548L115.112 187.964H106.868L111.332 171.548H119.468ZM150.984 169.208H135.432L140.616 163.16H149.688L150.984 169.208ZM155.016 187.964H145.98L143.532 178.172H138.42L131.184 187.964H120.636L133.524 171.512H151.488L155.016 187.964ZM185.421 163.196L179.625 169.172L162.201 169.136L160.761 163.268H169.797L170.481 166.076L173.145 163.232L185.421 163.196ZM177.393 171.548L173.037 176.336L175.485 188L166.125 187.964L165.441 184.94L162.741 188H150.536L163.173 174.032L162.669 171.62L177.393 171.548ZM195.114 163.16L193.458 169.208H184.782L186.51 163.16H195.114ZM192.918 171.548L188.418 187.964H179.67L184.242 171.548H192.918Z" fill="#FDBF5A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M97 136C134.555 136 165 105.555 165 68C165 60.1133 163.657 52.5401 161.188 45.4967L74.4967 132.188C81.5401 134.657 89.1133 136 97 136ZM42.0509 108.065L75.416 74.7003L36.8913 36.1756C31.8536 45.6708 29 56.5022 29 68C29 82.9801 33.8439 96.8289 42.0509 108.065ZM65.1756 7.89132L103.7 46.416L137.065 13.0509C125.829 4.84392 111.98 0 97 0C85.5022 0 74.6708 2.85364 65.1756 7.89132Z" fill="#FDBF5A"/>
                    <path d="M51.4142 22.5857L59.8284 30.9999" stroke="#FDBF5A" stroke-width="4"/>
                    <path d="M69.4142 109L61 117.414" stroke="#FDBF5A" stroke-width="4"/>
                    <path d="M84.4142 93L76 101.414" stroke="#FDBF5A" stroke-width="4"/>
                    <path d="M99.4142 77L91 85.4142" stroke="#FDBF5A" stroke-width="4"/>
                    <path d="M129.414 45L121 53.4142" stroke="#FDBF5A" stroke-width="4"/>
                    <path d="M144.414 29L136 37.4142" stroke="#FDBF5A" stroke-width="4"/>
                    <path d="M67 38L75.4142 46.4142" stroke="#FDBF5A" stroke-width="4"/>
                    <path d="M84 55L92.4142 63.4142" stroke="#FDBF5A" stroke-width="4"/>
                    <path d="M114.414 61L106 69.4142" stroke="#FDBF5A" stroke-width="4"/>
                </svg>

            </div>
            <div className="login-page__right">
                    <AuthForm onSubmit={onSubmit}/>
                    {/*<RegistrationForm/>*/}
                {/*{authForm=='loginForm'*/}
                {/*    ?*/}
                {/*    <Paper*/}
                {/*        elevation={3}*/}
                {/*        className="form-block"*/}
                {/*    >*/}
                {/*        <Typography variant="h4"  className='form-title'>Войти</Typography>*/}
                {/*        <form noValidate autoComplete="off" className='form'>*/}
                {/*            <div className="inputs">*/}
                {/*                <div className="input-wrap">*/}
                {/*                    <TextField id="standard-basic" label="Email" className='input'/>*/}
                {/*                </div>*/}
                {/*                <div className="input-wrap">*/}
                {/*                    <TextField*/}
                {/*                        id="standard-basic"*/}
                {/*                        label="Пароль"*/}
                {/*                        className='input'*/}
                {/*                        type={'password'}*/}
                {/*                    />*/}
                {/*                    <a href="#" className='link link-gray'>Забыли пароль?</a>*/}
                {/*                </div>*/}

                {/*            </div>*/}
                {/*            <Button*/}
                {/*                variant="contained"*/}
                {/*                fullWidth={true}*/}
                {/*                className='button'*/}
                {/*            >*/}
                {/*                Войти*/}
                {/*            </Button>*/}
                {/*            <div className="links">*/}
                {/*                <a href="#" className='link link-gray'>Новый пользователь? </a>*/}
                {/*                <a href="#" onClick={handleRegForm} className='link link-yellow'>Регистрация</a>*/}
                {/*            </div>*/}
                {/*        </form>*/}
                {/*    </Paper>*/}
                {/*    :*/}
                {/*    <Paper*/}
                {/*        elevation={3}*/}
                {/*        className="form-block"*/}
                {/*    >*/}
                {/*        <Typography variant="h4" className='form-title'>Регистрация</Typography>*/}
                {/*        <form noValidate autoComplete="off" className='form'>*/}
                {/*            <div className="inputs">*/}
                {/*                <div className="input-wrap">*/}
                {/*                    <TextField id="standard-basic" label="Email*" className='input'/>*/}
                {/*                </div>*/}
                {/*                <div className="input-wrap">*/}
                {/*                    <TextField id="standard-basic" label="Как вас зовут?*" className='input'/>*/}
                {/*                </div>*/}
                {/*                <div className="input-wrap">*/}
                {/*                    <TextField*/}
                {/*                        id="standard-basic"*/}
                {/*                        label="Придумайте пароль*"*/}
                {/*                        className='input'*/}
                {/*                        type={'password'}*/}
                {/*                    />*/}

                {/*                </div>*/}

                {/*            </div>*/}
                {/*            <Button*/}
                {/*                variant="contained"*/}
                {/*                fullWidth={true}*/}
                {/*                className='button'*/}
                {/*                type='submit'*/}
                {/*                // onSubmit={}*/}
                {/*            >*/}
                {/*                Зарегистрироваться*/}
                {/*            </Button>*/}
                {/*            <div className="links">*/}
                {/*                <a href="#" className='link link-gray'>Уже зарегестрированны? </a>*/}
                {/*                <a href="#" onClick={handleAuthForm} className='link link-yellow'>Войти </a>*/}
                {/*            </div>*/}
                {/*        </form>*/}
                {/*    </Paper>*/}
                {/*}*/}

            </div>


        </div>
    );
}

export default Login;