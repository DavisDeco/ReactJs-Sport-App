import React from 'react';
import style from './header.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav'; //SideNav is installed in react

const Header = (props) => {

    // fuction to render navigation/toggle bar
    const navBars=()=>(
        <div className={style.bars}>
            <FontAwesome name="bars"
                         style = {{
                             color:'#dfdfdf',
                             padding:'10px',
                             cursor:'pointer'
                         }}
                         onClick={props.onOpenNav}
                         />
        </div>
    )

    // function to return the logo (if jsx synthax)
    const logo =()=>(
            <Link to="/" className={style.logo}>
                <img alt="logo" src="/images/nba_logo.png" />
            </Link>
        )


    return(
        <header className={style.header}>
            <SideNav {...props} />
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
} 

export default Header;