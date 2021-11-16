import React, { useState } from 'react'
import { ListGroup, Form, Row, Col, ProgressBar, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentMethod = ({ history }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { shippingAddress, cartItems } = cart
    cart.orderPrices = Number(cartItems.reduce((acc, cur) => acc + cur.quantity * cur.price, 0))
    cart.shippingPrices = Number(cart.orderPrices > 300000 ? 0 : cart.orderPrices * 0.15)
    cart.totalPrices = Number(cart.orderPrices + cart.shippingPrices)
    return (
        <>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="text-center text-blue2"
                    >CHECK ALL INFORMATION</h2>
                    <ProgressBar now={99}
                        style={{ marginBottom: '20px', borderRadius: '8px' }}
                        variant="info"
                        label="99%"
                        animated />
                </Col >
            </Row >
            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item
                            style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
                            <h2>SHIPPING INFO</h2>
                            Address: {shippingAddress.address}, District: {shippingAddress.district},
                            Provice: {shippingAddress.province}, Country: {shippingAddress.country}
                            <p>Phone Number: {shippingAddress.phoneNumber}</p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>PAYMENT METHOD</h2>
                            {cart.paymentMethod}
                        </ListGroup.Item>

                        <ListGroup.Item
                            style={{ borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
                            <h2>ITEMS</h2>
                            <ListGroup variant="flush">
                                {cartItems.map(item => (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>{item.name}</Col>
                                            <Col>{item.quantity}</Col>
                                            <Col>{item.quantity * item.price} VND</Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item
                            style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>

                            <h2>SUMMARY</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Orders</Col>
                                <Col>{cart.orderPrices} VND</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Shipping</Col>
                                <Col>{cart.shippingPrices} VND</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Total</Col>
                                <Col>{cart.totalPrices} VND</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item
                            style={{ borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
                            <Button
                                type="button"
                                className="rounded-btn"
                                variant="info">Place Order</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )

}

export default PaymentMethod