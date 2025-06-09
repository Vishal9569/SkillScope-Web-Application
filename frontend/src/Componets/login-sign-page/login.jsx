import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        try {
            const normalizedEmail = formData.email.trim().toLowerCase();
            const payload = {
                email: normalizedEmail,
                password: formData.password,
            };

            const response = await axios.post('http://localhost:8080/api/auth/login', payload);
            const { token } = response.data;

            localStorage.setItem('token', token);
            const payloadDecoded = JSON.parse(atob(token.split('.')[1]));
            onLogin(payloadDecoded);

            toast.success('Login successful!');
            navigate('/');
        } catch (err) {
            console.error('Login error:', err);
            setErrorMsg('Invalid email or password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h2 className="text-center mb-4">Login</h2>
                    {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />{' '}
                                    Logging in...
                                </>
                            ) : (
                                'Login'
                            )}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
