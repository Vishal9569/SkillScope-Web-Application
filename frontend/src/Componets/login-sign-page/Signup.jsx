import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Signup = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const normalizedEmail = form.email.trim().toLowerCase();
            const payload = {
                ...form,
                email: normalizedEmail,
            };

            await axios.post('http://localhost:8080/api/auth/register', payload);
            navigate('/');
            toast.success("Signup Successful!");
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error('User already exists');
            } else {
                toast.error('Signup failed');
            }
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Signup Form</h2>
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? 'Signing up...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default Signup;
