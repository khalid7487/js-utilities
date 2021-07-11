import React from 'react'

import './DrawerToggleButton.css';

const DrawerToggleButton = props => {
    return (
        <div>
            <button className="toggle-button" onClick={props.click}>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
            </button>
        </div>
    )
}

export default DrawerToggleButton
