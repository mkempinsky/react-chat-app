import React from 'react';
import Nav from '../Nav';

const Layout = props => {
    return (
        <div style={{height: '100vh'}}>
            <Nav />
            <div style={{marginTop: '50px'}}>{props.children}</div>
        </div>
    );
};
export default Layout;
