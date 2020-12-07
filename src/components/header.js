import React from 'react';
import LogoSmall from "./svg/logoSmall";
// import {AuthContext} from "../context";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {GET_LOGGED_IN, GET_LOGGED_OUT} from "../actions/actionAuth";

function Header() {
// function Header({onNavigate}) {
//     const {onSubmitLogout} = useContext(AuthContext);

    const dispatch = useDispatch();
    const logOut = (e) =>{
        e.preventDefault();
        dispatch({type: GET_LOGGED_OUT})
    }
    return (
        <header className="header">
            <LogoSmall/>
            <ul className="header-menu">
               <li className="menu-item">
                  <Link className='menu-link' to='/main'>Карта</Link>
                   {/*<a href="#" onClick={() => onNavigate('main')} className='menu-link'>Карта</a>*/}
               </li>
               <li className="menu-item">
                   <Link className='menu-link' to='/profile'>Профиль</Link>
                   {/*<a href="#" onClick={() => onNavigate('profile')}  className='menu-link'>Профиль</a>*/}
               </li>
               <li className="menu-item">
                   <a href="#" onClick={logOut}  className='menu-link'>Выйти</a>
               </li>
            </ul>
        </header>
    );
}

export default Header;
