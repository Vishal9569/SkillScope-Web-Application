import React, { useState, useEffect } from 'react';
import { VscDebugAll } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
    const [isSticky, setIsSticky] = useState(false);
    const navigate = useNavigate();

    const checkSticky = () => {
        setIsSticky(window.scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', checkSticky);
        return () => window.removeEventListener('scroll', checkSticky);
    }, []);

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div
                className="logo-Name"
                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => navigate('/')}
            >
                <VscDebugAll className="logo" />
                <h3 style={{ marginLeft: '8px' }}>SkillScope</h3>
            </div>

            <div
                className="nav-div"
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
            >
                <button
                    className="navbar-brand btn-link"
                    onClick={() => navigate('/')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                    Home
                </button>

                <button
                    className="navbar-brand btn-link"
                    onClick={() => navigate('/#how-it-works')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                    How it Works
                </button>

                <button
                    className="navbar-brand btn-link"
                    onClick={() => navigate('/signup')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                    Assessment
                </button>

                {user ? (
                    <>
                        <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>
                            Welcome, {user.name}
                        </span>
                        <button
                            className="btn btn-outline-danger"
                            onClick={onLogout}
                            style={{ marginLeft: '10px' }}
                        >
                            Logout
                        </button>
                    </>
                ) : null}
            </div>
        </nav>
    );
};

export default Header;
