import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { FormContainer, Form, Button, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { login } from '../actions/userAction'

const Login = ({ history }) => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const userRegister = useSelector(state => state.userRegister)

    const { error } = userLogin

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(login(email, password))
    }
    useEffect(() => {
        if (userLogin.user) {
            if (userLogin.user.isProvider) history.push('/provider')
            else history.push('/')
        }
    }, [dispatch, userLogin])

    return (
        <Row className="justify-content-center" style={{ fontWeight: '600' }}>
            <Col md={5}>
                <Row>
                    <Image style={{ color: 'white' }} src='/images/trad-games-square-800.jpg' fluid rounded />
                </Row>
            </Col>

            <Col sm={6} md={4}>
                <h1 style={{ color: 'white' }} className="my-3">THE WORLD OF GAMES</h1>
                {error && <Message mess={error}></Message>}
                <Form onSubmit={submitHandler} style={{ fontWeight: '600' }}>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="password" className='my-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="info" type="submit" className='my-3 rounded-btn'
                        onClick={submitHandler}>
                        Sign in
                    </Button>
                </Form>

                <Row style={{ fontWeight: '600' }}>
                    <p>New user?
                        <Link to={'/register'} style={{ color: '#3AD2F2', textDecoration: 'none' }}>
                            Create account now
                        </Link>
                    </p>
                </Row>
            </Col>
        </Row>
    )
}

export default Login