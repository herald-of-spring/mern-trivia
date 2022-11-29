import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();

    return (
        <main className='page-main d-flex justify-content-center align-items-center'>
            <div className='text-center'>Profile</div>
            <div className='home-buttons'>
                <button className='btn' onClick={() => { navigate('/') }}>Home</button>
            </div>
        </main>
    )
}

export default Profile