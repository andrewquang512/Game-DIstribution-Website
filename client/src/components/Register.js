import React, { useEffect, useState } from 'react'
import { FormContainer, Form, Button, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import { register } from '../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'

const Register = ({ history }) => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, user } = userRegister
    const registerHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Confirm password does not match!')
        } else {
            dispatch(register(name, email, password))
        }
    }

    useEffect(() => {
        if (user) {
            history.push('/')
        }
    }, [dispatch, user])

    return (
        <Row className="justify-content-center" style={{ fontWeight: '600' }}>
            <Col md={5}>
                <Row>
                    <Image style={{ color: 'white' }} src='/images/trad-games-square-800.jpg' fluid rounded />
                </Row>
            </Col>
            <Col md={4}>
                {message && <Message mess={message}></Message>}
                {error && <Message mess={error}></Message>}
                <Form onSubmit={registerHandler} style={{ fontWeight: '600' }}>
                    <Form.Group className="my-2" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="my-2" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="password" className='my-2'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="password" className='my-2'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="info" type="submit" className='my-3 rounded-btn'>
                        Sign Up
                    </Button>
                </Form>

                <Row style={{ fontWeight: '600' }}>
                    <p>Had account? 
                        <Link  to={'/login'} style={{ color: '#3AD2F2', textDecoration: 'none' }}>
                            Login now
                        </Link>
                    </p>
                </Row>
            </Col>
        </Row>
    )
}

export default Register