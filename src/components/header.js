import React from 'react';
import LogoSmall from "./svg/logoSmall";
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {GET_LOGGED_OUT} from "../actions/authAction";


function Header() {
    const dispatch = useDispatch();
    const logOut = (e) =>{
        e.preventDefault();
        dispatch({type: GET_LOGGED_OUT})
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('nameUser');
        localStorage.removeItem('numberCard');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('cvc');

    }
    return (
        <header className="header">
            <LogoSmall/>
            <ul className="header-menu">
               <li className="menu-item">
                  <Link className='menu-link' to='/main'>Карта</Link>
               </li>
               <li className="menu-item">
                   <Link className='menu-link' to='/profile'>Профиль</Link>
               </li>
               <li className="menu-item">
                   <a href="#" onClick={logOut}  className='menu-link'>Выйти</a>
               </li>
            </ul>
        </header>
    );
}

export default Header;
