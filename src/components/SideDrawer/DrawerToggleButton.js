import React from 'react';
import './DrawerToggleButton.css';

const drawerToggleButton = props => {
    return (
        <button className='toggle-button' onClick={props.drawerClickHandler}>
            <div className='toggle-button__line' />
            <div className='toggle-button__line' />
            <div className='toggle-button__line' />
        </button>
    );
}

export default drawerToggleButton;