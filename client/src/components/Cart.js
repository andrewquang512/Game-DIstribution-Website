import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListGroup, Row, Col } from 'react-bootstrap'

const Cart = ({ history }) => {
    const { cartItems } = useSelector(state => state.cart)


    return (
        <Row className="justify-content-center">
            <Col md={8}>
                <ListGroup variant="flush">
                    {cartItems.map(item => (
                        <ListGroup.Item style={{ marginBottom: '10px', borderRadius: '10px', height:'80px' }}>
                            <Row className="align-items-center">
                                <Col>
                                    {item.name}
                                </Col>
                                <Col>{item.price}</Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        </Row>
    )
}

export default Cart