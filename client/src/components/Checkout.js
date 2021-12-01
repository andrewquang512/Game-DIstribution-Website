import React, { useState } from 'react'
import { ListGroup, Form, Row, Col, ProgressBar, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod, removeAllItemsInCart } from '../actions/cartActions'
import { placeOrder } from '../actions/orderActions'
import { PayPalButton } from "react-paypal-button-v2"
import Message from '../components/Message'

const PaymentMethod = ({ history }) => {
    const dispatch = useDispatch()
    const [isPaid, setIsPaid] = useState(false)

    const cart = useSelector(state => state.cart)
    const { user } = useSelector(state => state.userLogin)
    const { shippingAddress, cartItems } = cart

    cart.orderPrices = Number(cartItems.reduce((acc, cur) => acc + cur.quantity * cur.price, 0))
    cart.shippingPrices = Number(cart.orderPrices > 300000 ? 0 : cart.orderPrices * 0.15)
    cart.totalPrices = Number(cart.orderPrices + cart.shippingPrices)

    const backToHomeHandler = () => {
        dispatch(removeAllItemsInCart())
        history.push('/')
    }

    
    return (
        <>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="text-center text-blue2"
                    >CHECK ALL INFORMATION</h2>
                    <ProgressBar now={isPaid ? 100 : 99}
                        style={{ marginBottom: '20px', borderRadius: '8px' }}
                        variant="info"
                        label={isPaid ? "100%" : "99%"}
                        animated />
                </Col >
            </Row >
            <Row>
                <Col md={6} lg={8} xs={12} sm={12}>
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
                            {isPaid ? (
                                <Message mess={`The order is paid!`} variant="success"></Message>
                            ) : (
                                <Message mess="No paid!"></Message>
                            )}
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
                <Col md={6} lg={4} xs={12} sm={12}>
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
                            {isPaid ? (
                                <>
                                    <Message mess="The order is paid!" variant="success"></Message>
                                    <Button
                                        type="button"
                                        className="rounded-btn"
                                        variant="info"
                                        onClick={backToHomeHandler}
                                        >Go Back Home</Button>
                                </>
                            ) : (
                                <PayPalButton
                                    amount="0.01"
                                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                    onSuccess={
                                        (details, data) => {
                                            alert("Transaction completed by " + user.name);
                                            setIsPaid(true)
                                            dispatch(placeOrder({
                                                shippingAddress:cart.shippingAddress,
                                                orderPrices: cartItems.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)  ,
                                                totalPrices: cart.totalPrices,
                                                paymentMethod: cart.paymentMethod,
                                                isPaid,
                                                orderItems: cart.cartItems,
                                                id: user._id
                                            }
                                            ))
                                            // OPTIONAL: Call your server to save the transaction
                                            return fetch("/paypal-transaction-complete", {
                                                method: "post",
                                                body: JSON.stringify({
                                                    orderID: data.orderID
                                                })
                                            });
                                        }}
                                />
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )

}

export default PaymentMethod