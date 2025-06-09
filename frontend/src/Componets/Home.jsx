import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Body from './home-page/body';
import BodyTwo from './home-page/Body-two';
import Bodythree from './home-page/Body-three';
import FeedbackResults from './home-page/bodyfour';

import Login from '../Componets/login-sign-page/login';
import Signup from '../Componets/login-sign-page/Signup';

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState('login');  
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        const message = location.state?.message;
        if (message) {
            toast.success(message, { position: 'top-center', autoClose: 3000 });
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const openAuthModal = (mode = 'login') => {
        setAuthMode(mode);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleAuthSuccess = () => {
        setIsLoggedIn(true);
        closeModal();
    };

    const handleStart = (category) => {
        localStorage.setItem('selectedCategory', category);
        if (!isLoggedIn) {
            toast.info('Please log in or sign up to continue.');
            openAuthModal('login');
        } else {
            toast.success(`Starting category: ${category}`);
            navigate(`/instructions?category=${category}`);
        }
    };

    // Toggle between login and signup forms when user clicks the footer link
    const toggleAuthMode = () => {
        setAuthMode(authMode === 'login' ? 'signup' : 'login');
    };

    return (
        <>
            {/* Main content blur when modal open */}
            <div
                style={{
                    filter: modalOpen ? 'blur(5px)' : 'none',
                    pointerEvents: modalOpen ? 'none' : 'auto',
                    transition: 'filter 0.3s ease',
                }}
            >
                <Body />
                <BodyTwo />
                <Bodythree
                    onStart={handleStart}
                    openLogin={() => openAuthModal('login')}
                    openSignup={() => openAuthModal('signup')}
                />
                <FeedbackResults />
            </div>

            {/* Modal overlay */}
            {modalOpen && (
                <div
                    onClick={closeModal}
                    style={{
                        position: 'fixed',
                        zIndex: 9999,
                        top: 0,
                        left: 0,
                        height: '100vh',
                        width: '100vw',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '1rem',
                    }}
                >
                    {/* Modal content */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: 400,
                            width: '100%',
                            backgroundColor: '#fff',
                            borderRadius: '15px',
                            padding: '2rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: '300px',
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            aria-label="Close modal"
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                background: 'transparent',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                lineHeight: 1,
                            }}
                        >
                            ×
                        </button>

                        {/* Login or Signup form */}
                        {authMode === 'login' ? (
                            <Login onLogin={handleAuthSuccess} />
                        ) : (
                            <Signup onSignup={handleAuthSuccess} />
                        )}

                        {/* Footer note with toggle link */}
                        <div
                            style={{
                                marginTop: 'auto',
                                paddingTop: '1rem',
                                borderTop: '1px solid #eee',
                                fontSize: '0.9rem',
                                textAlign: 'center',
                                color: '#555',
                                cursor: 'default',
                                userSelect: 'none',
                            }}
                        >
                            {authMode === 'login' ? (
                                <>
                                    New user?
                                    <span
                                        onClick={toggleAuthMode}
                                        style={{
                                            marginLeft: 6,
                                            color: '#007bff',
                                            textDecoration: 'underline',
                                            cursor: 'pointer',
                                        }}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') toggleAuthMode();
                                        }}
                                    >
                                        Sign up here
                                    </span>
                                </>
                            ) : (
                                <>
                                    Already have an account?
                                    <span
                                        onClick={toggleAuthMode}
                                        style={{
                                            marginLeft: 6,
                                            color: '#007bff',
                                            textDecoration: 'underline',
                                            cursor: 'pointer',
                                        }}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') toggleAuthMode();
                                        }}
                                    >
                                        Log in here
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
