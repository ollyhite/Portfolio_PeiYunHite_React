import React from 'react';

const View = ({ title, children, className }) => {
    return (
        <div className={["view-div", className].join(" ")}>
            {children}
        </div>
    );
};

export default View;