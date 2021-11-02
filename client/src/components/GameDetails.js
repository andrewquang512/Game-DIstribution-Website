import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import { listGameDetails, listAllGames } from '../actions/gameActions'
import { addToCart } from '../actions/cartActions'
import { Link } from 'react-router-dom'
import { Button, Row, Col, Image, ListGroup, Card, Form } from 'react-bootstrap'
import Cart from './Cart'
import store from '../store'


const GameDetails = ({ match }) => {
    const [quantity, setQuantity] = useState(1)
    const id = match.params.id
    const dispatch = useDispatch()

    const gameDetails = useSelector(state => state.gameDetails)
    const { loading, error, game } = gameDetails
    const gameList = useSelector(state => state.gameList)
    const { games } = gameList

    const addToCartHandler = (e) => {
        e.preventDefault()

        dispatch(addToCart(game._id, Number(quantity)))
    }

    useEffect(() => {
        dispatch(listAllGames())
        dispatch(listGameDetails(id))
    }, [dispatch, match])
    return (
        <>
            <Link to="/">
                <Button className="btn-login rounded-btn" style={{ color: 'white' }} type="button" variant="dark">Back</Button>
            </Link>
            {loading ? <Loading /> : !game ? <Loading /> : (
                <Row className="my-3">
                    <Col lg={3}>
                        <Image style={{ height: '250px' }} src={game.icon} rounded fluid></Image>
                    </Col>
                    <Col lg={6} >
                        <Card style={{ borderRadius: '10px' }}>
                            <ListGroup style={{ borderRadius: '10px' }} variant='flush'>
                                <ListGroup.Item style={{ borderRadius: '10px' }}><h3>{game.name}</h3></ListGroup.Item>
                                <ListGroup.Item><strong>{game.description}</strong></ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={3}>Publisher:</Col>
                                        <Col>{game.publisher}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={3}>Price:</Col>
                                        <Col>${game.price}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row className="align-items-center">
                                        <Col md={3}>
                                            Quantity:
                                        </Col>
                                        <Col sm={4} md={2}>
                                            <Form.Control as="select" onChange={(e) => setQuantity(e.target.value)}
                                                style={{ width: '100%' }} value={quantity} aria-label="Default select example">
                                                {[...Array(game.countInStock).keys()].map(count => (
                                                    <option value={count + 1}>{count + 1}</option>
                                                ))}

                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ borderRadius: '10px' }}>
                                    <Button type="button"
                                        onClick={addToCartHandler}
                                        {...game.countInStock == 0 && 'disabled'}
                                        className="btn-login rounded-btn">
                                        Add to cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col lg={3} style={{ height: '400px', overflowY: 'scroll' }}>
                        {games && games.map(item => item._id !== game._id && (
                            <Row style={{ marginBottom: '20px' }}>
                                <Col>
                                    <Link to={`/game/${item._id}`}>
                                        <Image src={item.icon} fluid rounded></Image>
                                    </Link>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
            )}
        </>
    )
}

export default GameDetails