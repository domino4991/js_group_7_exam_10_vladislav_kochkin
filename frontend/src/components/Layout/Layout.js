import React from 'react';

const Layout = props => {
    return (
        <>
            <header>Header will be here</header>
            <main className="Main">
                {props.children}
            </main>
        </>
    );
};

export default Layout;