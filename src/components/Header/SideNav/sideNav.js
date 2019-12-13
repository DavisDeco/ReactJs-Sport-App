import React from 'react';
import SideNav from 'react-simple-sidenav';

import SideNavItems from './sideNav_items';

const sideNavigation = (props) => {
    return (
        <div>
            {/* rendering the actual SideNav we installed via react */}
            <SideNav
                // get the passed props
                showNav = {props.showNav}
                onHideNav  = {props.onHideNav} 
                navStyle = {{
                    background:'#242424',
                    maxWidth: '220px',
                }}
            >
                 {/* add component containing sidenav menu items    */}
                <SideNavItems/>

            </SideNav>
        </div>
    )
}

export default sideNavigation;