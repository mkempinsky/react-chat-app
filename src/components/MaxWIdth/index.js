import React from 'react';

export const MaxWidth = props => {
    return (
        <div className="max-width">
            {props.children}
            <style jsx="true">
                {`
                    .max-width {
                        max-width: 1170px;
                        margin: 0 auto;
                    }
                `}
            </style>
        </div>
    );
};
