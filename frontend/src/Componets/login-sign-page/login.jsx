import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        try {
            const { data } = await axios.post(
                'http://localhost:8080/api/auth/login',
                {
                    email: formData.email.trim().toLowerCase(),
                    password: formData.password
                }
            );

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user)); // store user

            navigate('/');
            window.location.reload();
            toast.success('Login successful!');
        } catch (err) {
            setErrorMsg('Invalid email or password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Login</h2>
            {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button type="submit" className="w-100" disabled={loading}>
                    {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
