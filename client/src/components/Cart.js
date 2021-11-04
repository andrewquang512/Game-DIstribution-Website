import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListGroup, Row, Col, Button, Form, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addToCart, removeFromCart } from '../actions/cartActions'

const Cart = ({ history }) => {
    const { user } = useSelector(state => state.userLogin)

    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const purchaseHandler = (e) => {
        e.preventDefault()

        if (!user) {
            history.push('/login')
        } else {
            history.push('/checkout')
        }
    }

    useEffect(() => {

    }, [dispatch])
    return (
        <Row className="justify-content-center">
            <Col md={11} >
                <ListGroup variant="flush">
                    <ListGroup.Item style={{ marginBottom: '10px', borderRadius: '10px' }}>
                        <Row >
                            <Col md={5}>Games</Col>
                            <Col md={2}>Unit prices</Col>
                            <Col md={2}>Quantity</Col>
                            <Col md={2}>Amount of money</Col>
                            <Col md={1}>Operation</Col>
                        </Row>
                    </ListGroup.Item>
                    {cartItems.map(item => (item || item.length > 0) && (
                        <ListGroup.Item className="box-shadow" style={{ marginBottom: '10px', borderRadius: '10px' }}>
                            <Row className="align-items-center">
                                <Col md={5} style={{ height: '100%', alignItems: 'center', paddingLeft: '24px' }}>
                                    <Row>
                                        {item.name}
                                    </Row>
                                    <Row>
                                        Publihser: {item.publisher}
                                    </Row>
                                </Col>
                                <Col md={2} style={{ height: '100%' }}>{item.price} VND</Col>
                                <Col md={2}>
                                    <Form.Control as="select"
                                        style={{ width: '100%' }} value={item.quantity}
                                        onChange={(e) => dispatch(addToCart(item.id, e.target.value))}
                                        aria-label="Default select example">
                                        {[...Array(item.countInStock).keys()].map(count => (
                                            <option value={count + 1}>{count + 1}</option>
                                        ))}

                                    </Form.Control>

                                </Col>
                                <Col md={2}>{item.price * item.quantity} VND</Col>
                                <Col md={1}>
                                    <Button variant="danger" className="rounded-btn"
                                        onClick={() => dispatch(removeFromCart(item.id))}>
                                        <i style={{ color: 'white' }} className="fas fa-trash-alt"></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                    <ListGroup.Item style={{ marginBottom: '10px', borderRadius: '10px' }}>
                        <Row>
                            <Col md={7}>TOTAL</Col>
                            <Col style={{ paddingLeft: '30px' }} md={2}>{cartItems.reduce((acc, cur) => acc + Number(cur.quantity), 0)}</Col>
                            <Col md={2}>{cartItems.reduce((acc, cur) => acc + Number(cur.quantity) * Number(cur.price), 0)} VND</Col>
                        </Row>
                    </ListGroup.Item>
                    <Row style={{justifyContent:'center', marginTop:'20px'}}>
                        <Col md={1}>
                            <Button className="rounded-btn" 
                                type='button' 
                                variant='info'
                                onClick={purchaseHandler}
                            >
                                Purchase
                            </Button>
                        </Col>
                    </Row>
                </ListGroup>
            </Col>
        </Row>
    )
}

export default Cart