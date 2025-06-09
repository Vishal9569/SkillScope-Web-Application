 

/* AuthModal.js */
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './ModularAuth.css';

const AuthModal = () => {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className="auth-container mt-5">
            <div className="auth-header">{isSignup ? 'Sign Up' : 'Log In'}</div>
            {isSignup ? <Signup /> : <Login onLogin={() => { }} />}
            <div className="auth-switch">
                {isSignup ? (
                    <>
                        Already have an account?{' '}
                        <button onClick={() => setIsSignup(false)}>Log in here</button>
                    </>
                ) : (
                    <>
                        New user?{' '}
                        <button onClick={() => setIsSignup(true)}>Click here to sign up</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthModal;
