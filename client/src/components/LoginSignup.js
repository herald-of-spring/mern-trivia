import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function LoginSignup() {
    const navigate = useNavigate();

    return (
      <>
        <Login />
        <Signup />
      </>
    );
}

export default LoginSignup