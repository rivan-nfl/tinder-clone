import React from 'react'
import './SwipeButtons.css'
import { IconButton } from '@material-ui/core';
import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons';

const SwipeButtons = () => {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons_repeat'>
                <Replay fontSize='large' style={{color: '#f5b748'}} />
            </IconButton>
            <IconButton className='swipeButtons_left'>
                <Close fontSize='large' style={{color: '#ec5e6f'}} />
            </IconButton>
            <IconButton className='swipeButtons_star'>
                <StarRate fontSize='large' style={{color: '#62b4f9'}} />
            </IconButton>
            <IconButton className='swipeButtons_right'>
                <Favorite fontSize='large' style={{color: '#76e2b3'}} />
            </IconButton>
            <IconButton className='swipeButtons_lightning'>
                <FlashOn fontSize='large' style={{color: '#915dd1'}} />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
