import React from 'react';

const Main = ({header, children}) => (
    <>
        <div className="main-wrapper">
            <div className="header">
                {header}
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    </>
);
export default Main;