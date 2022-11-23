import React from 'react';

function Header() {

    return (
        <header className='page-header'>
            <div className='d-flex'>
                <img src={'./assets/mern-logo.png'} alt='MERN Logo'></img>
                <h1>MERN Trivia</h1>
            </div>
        </header>
    )
}

export default Header