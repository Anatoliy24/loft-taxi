import React from 'react';
import LogoSmall from "./svg/logoSmall";

function Header({onNavigate}) {

    return (
        <header className="header">
            <LogoSmall/>
            <ul className="header-menu">
               <li className="menu-item">
                   <a href="#" onClick={() => onNavigate('main')} className='menu-link'>Карта</a>
               </li>
               <li className="menu-item">
                   <a href="#" onClick={() => onNavigate('profile')}  className='menu-link'>Профиль</a>
               </li>
               <li className="menu-item">
                   <a href="#" onClick={() => onNavigate('login')}  className='menu-link'>Выйти</a>
               </li>
            </ul>
        </header>
    );
}

export default Header;
