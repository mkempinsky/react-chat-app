import React from 'react';
import {gray, BREAKPOINT} from '../../lib/styles';

const Input = props => {
    return (
        <div className="input">
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props} />
            <style jsx="true">
                {`
                    .input {
                        margin: 10px 0px;
                    }
                    .input input {
                        height: 30px;
                        border: 1px solid ${gray(75)};
                        padding: 5px 2px;
                        border-radius: 2px;
                        width: 100%;
                        display: block;
                    }
                    .input input::placeholder {
                        color: ${gray(200)};
                    }
                    .input input:focus {
                        outline: 0;
                    }
                    .input label {
                        text-align: left;
                        float: left;
                        color: ${gray(300)};
                        padding-bottom: 3px;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .input {
                            margin: 10px 5px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Input;
