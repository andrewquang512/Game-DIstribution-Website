import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listMyOrders } from '../actions/orderActions'
import Loading from '../components/Loading'
import Message from './Message'
import { Row, Col, ListGroup } from 'react-bootstrap'


const MyOrder = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.userLogin)
    const { loading, error, orders } = useSelector(state => state.myOrders)
    useEffect(() => {
        dispatch(listMyOrders(user.id))
    }, [dispatch])
    return (
        <>
            {loading ? <Loading /> :
                orders ? orders.length == 0 ?
                    <Message mess="No orders"></Message> :
                    (
                        <Row className="justify-content-center">
                            <Col lg={9}>
                                {orders.map((order, idx) => (
                                    <ListGroup
                                        variant="flush"
                                        style={{ marginBottom: '30px' }}>
                                            <ListGroup.Item
                                            style={{borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}>
                                                ORDER: {idx + 1}
                                            </ListGroup.Item>
                                            {order.orderItems.map(item => (
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col lg={3}>Name: {item.name}</Col>
                                                        <Col lg={3}>Publisher: {item.publisher}</Col>
                                                        <Col lg={2}>Quantity: {item.quantity}</Col>
                                                        <Col>Unit price: {item.price} VND</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            ))}
                                            <ListGroup.Item
                                            style={{borderBottomLeftRadius:'8px', borderBottomRightRadius:'8px'}}>
                                                <Row>
                                                    <Col>Payment method: {order.paymentMethod}</Col>
                                                    <Col>Shipping prices: {order.shippingPrices} VND</Col>
                                                    <Col>Total prices: {order.totalPrices} VND</Col>
                                                </Row>
                                            </ListGroup.Item>
                                    </ListGroup>
                                ))}
                            </Col>
                        </Row>
                    ) : <Message mess="No orders"></Message>
            }
        </>
    )
}

export default MyOrder