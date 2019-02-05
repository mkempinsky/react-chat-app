import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="nav-container">
                    <div>Home</div>
                </div>
                <style jsx="true">{`
                    .nav {
                        height: 50px;
                        display: flex;
                        align-items: center;
                        padding: 5px 30px;
                        position: fixed;
                        z-index: 100;
                        top: 0;
                        background: #fff;
                        width: 100%;
                        box-shadow: -2px 3px 10px rgba(105, 105, 105, 0.5);
                    }
                `}</style>
            </div>
        );
    }
}
export default Nav;
