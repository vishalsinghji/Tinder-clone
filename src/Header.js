import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import Logo from './Tinder.png';

function Header() {
    return (
        <div className="header"> 
            <IconButton>
            <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <IconButton>
                <img 
                className="header__logo"
               src={Logo} 
               />
             
            </IconButton>
            <IconButton>
            <ForumIcon fontSize="large" className="header_icon" />    
            </IconButton>



        </div>
    )
}

export default Header
