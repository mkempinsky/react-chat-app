import React from 'react';

const chatIcon = props => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<svg fill="red" height="50pt" preserveAspectRatio="xMidYMid meet" viewBox="0 0 300 250" width="30px" xmlns="http://www.w3.org/2000/svg"/>`
            }}
        />
    );
};
export default chatIcon;
