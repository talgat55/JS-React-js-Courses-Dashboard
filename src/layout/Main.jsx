import React from 'react';

const Main = ({header, children}) => {

    return (
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
    )
};
export default Main;