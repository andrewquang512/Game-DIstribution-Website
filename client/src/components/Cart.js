import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListGroup, Row, Col, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addToCart } from '../actions/cartActions'

const Cart = ({ history }) => {
    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {

    }, [dispatch])
    return (
        <Row className="justify-content-center">
            <Col md={11} >
                <Row style={{ marginBottom: '10px' }}>
                    <Col md={5}>Games</Col>
                    <Col md={2}>Unit prices</Col>
                    <Col md={2}>Quantity</Col>
                    <Col style={{ paddingLeft: '30px' }} md={2}>Amount of money</Col>
                    <Col md={1}>Operation</Col>
                </Row>
                <ListGroup variant="flush">
                    {cartItems.map(item => (
                        <ListGroup.Item style={{ marginBottom: '10px', borderRadius: '10px', height: '80px' }}>
                            <Row className="align-items-center">
                                <Col md={5} style={{ height: '100%' }}>
                                    {item.name}
                                </Col>
                                <Col md={2} style={{ height: '100%' }}>{item.price} VND</Col>
                                <Col md={2}>
                                    <Form.Control as="select" 
                                        style={{ width: '100%' }} value={item.quantity} 
                                        onChange={(e) => dispatch(addToCart(item._id, e.target.value))}
                                        aria-label="Default select example">
                                        {[...Array(item.countInStock).keys()].map(count => (
                                            <option value={count + 1}>{count + 1}</option>
                                        ))}

                                    </Form.Control>

                                </Col>
                                <Col style={{ paddingLeft: '30px' }} md={2}>${item.price}</Col>
                                <Col style={{ paddingLeft: '26px' }} md={1}>
                                    <Button variant="danger" className="rounded-btn">
                                        <i style={{ color: 'white' }} className="fas fa-trash-alt"></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        </Row>
    )
}

export default Cart