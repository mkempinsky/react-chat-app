import React from 'react';
import {gradient} from '../../lib/styles';

const Button = props => {
    let theme = props.theme;
    switch (theme) {
        case 'blue-green':
            theme = gradient(100);
            break;
        case 'red':
            theme = gradient(500);
            break;
        case 'purple':
            theme = gradient(400);
            break;
        case 'green':
            theme = gradient(300);
            break;
        case 'blue':
            theme = gradient(200);
            break;
        default:
            theme = '#25aae1, #40e495, #30dd8a, #2bb673';
            break;
    }
    return (
        <button className="button" theme={theme} {...props}>
            {props.children}
            <style jsx="true">
                {`
                    .button {
                        width: 200px;
                        max-width: 200px;
                        color: #fff;
                        cursor: pointer;
                        height: 45px;
                        text-align: center;
                        border: none;
                        margin: 0 auto;
                        background-size: 300% 100%;
                        moz-transition: all 0.4s ease-in-out;
                        -o-transition: all 0.4s ease-in-out;
                        -webkit-transition: all 0.4s ease-in-out;
                        transition: all 0.4s ease-in-out;
                    }

                    .button:hover {
                        background-position: 100% 0;
                        moz-transition: all 0.4s ease-in-out;
                        -o-transition: all 0.4s ease-in-out;
                        -webkit-transition: all 0.4s ease-in-out;
                        transition: all 0.4s ease-in-out;
                    }

                    .button:focus {
                        outline: none;
                    }

                    .button {
                        background-image: linear-gradient(to right, ${theme});
                    }
                `}
            </style>
        </button>
    );
};

export default Button;
