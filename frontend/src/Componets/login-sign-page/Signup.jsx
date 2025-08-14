import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await axios.post(
                'http://localhost:8080/api/auth/register',
                {
                    name: form.name.trim(),
                    email: form.email.trim().toLowerCase(),
                    password: form.password
                }
            );

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            navigate('/');
            window.location.reload();
            toast.success("Signup successful!");
        } catch (error) {
            toast.error(error.response?.data?.error || 'Signup failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Signup</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="form-control mb-3"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control mb-3"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control mb-3"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? 'Signing up...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default Signup;
