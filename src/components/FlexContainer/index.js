import React from 'react';
import {BREAKPOINT} from '../../lib/styles';

const FlexContainer = props => {
    let flex = props.flex;
    switch (flex) {
        case '1':
            flex = '100%';
            break;
        case '2':
            flex = '50%';
            break;
        case '3':
            flex = '33.33%';
            break;
        case '4':
            flex = '25%';
            break;
        default:
            flex = '50%';
            break;
    }
    return (
        <div className="flexContainer" {...props}>
            {props.children}
            <style jsx="true">
                {`
                    .flexContainer {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .flexContainer {
                            display: flex;
                            flex-flow: row wrap;
                        }
                        .flexContainer > * {
                            flex: 1 0 calc(${flex} - 20px);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default FlexContainer;
