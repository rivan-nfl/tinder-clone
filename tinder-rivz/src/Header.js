import React from 'react';
import './Header.css';
import { Person, Forum } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import tinderLogo from './assets/Tinder-Emblem.png';

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <Person fontSize='large' className='header_icon' />
            </IconButton>

            <img
                className='header_logo'
                src={tinderLogo}
                alt=''
            />

            <IconButton>
                <Forum fontSize='large' className='header_icon' />
            </IconButton>
        </div>
    )
}

export default Header
