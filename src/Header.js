import React from 'react'
import './header.css'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className = "header__icon"/>
            </IconButton>  

        
            <img className="header__logo" src="https://media.istockphoto.com/vectors/fire-sign-fire-flames-icon-isolated-on-white-background-vector-vector-id1125396983?k=6&m=1125396983&s=612x612&w=0&h=jiojA2eeQcSxz1NngGfRhkEIH7PYUIbxYrJq8j6WyaM=" alt=""/>       
            

            <IconButton>
                <ForumIcon fontSize="large" className = "header__icon"/>
            </IconButton> 

        </div>
    )
}

export default Header
