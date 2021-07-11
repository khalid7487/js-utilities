import React from 'react'

import './SideDrawer.css';

const SideDrawer= props => {
    
    let drawerClasses =['side-drawer'];
    if(props.show){
        drawerClasses = ['side-drawer', 'open'];
    }

    return (
        <div>
            <nav className={drawerClasses.join(' ')}>
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default SideDrawer
