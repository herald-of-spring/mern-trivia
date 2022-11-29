import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/Auth';

function Home() {
    console.log(auth.loggedIn());
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    // useEffect(() => {
    //     const { data } = auth.getProfile();
    //     const username = data.username
    //     setUser(username);
    //     return username;
    // }, [])

    return (
        <main className='page-main d-flex justify-content-center align-items-center'>
            <div className='text-center'>Welcome, {user}!</div>
            <div className='home-buttons m-5'>
                <button className='btn' onClick={() => { navigate('/select') }}>Quizzes</button>
                <button className='btn' onClick={() => { navigate('/profile') }}>Profile</button>
                {auth.loggedIn() 
                ? (<button className='btn' onClick={auth.logout}>Logout</button>) 
                : (<button className='btn' onClick={() => { navigate('/login') }}>Login</button>)}
            </div>
        </main>
    )
}

export default Home