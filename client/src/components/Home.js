import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/Auth';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

function Home() {
    console.log(auth.loggedIn());
    const { loading, data } = useQuery(GET_ME);
    let userData = data?.me || {};
    console.log(userData);
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        auth.loggedIn() 
        ? setUser(userData.username)
        : console.log(userData)
    }, [userData])

    return (
        <main className='page-main d-flex justify-content-center align-items-center'>
            <div className='spacer4'></div>
            <div className='text-center welcome'>Welcome {user}!</div>
            <div className='spacer2'></div>
            <div className='home-buttons m-5'>
                <button className='btn btn-blue' onClick={() => { navigate('/select') }}>Quizzes</button>
                <button className='btn btn-black' onClick={() => { navigate('/profile') }}>Profile</button>
                {auth.loggedIn() 
                ? (<button className='btn text-white' onClick={auth.logout}>Logout</button>) 
                : (<button className='btn text-white' onClick={() => { navigate('/login') }}>Login</button>)}
            </div>
        </main>
    )
}

export default Home