import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'

const Game = ({ game }) => {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [dispatch])

    const addToCartHandler = (e) => {
        e.preventDefault()
        dispatch(addToCart(game._id))
    }

    return (
        <Card className="rounded my-3" style={{ width: '18rem', height: '20rem' }}>
            <Card.Img style={{ height: '180px' }} variant="top" src={game.icon} />
            <Card.Body className='test'>
                <Card.Title style={{ color: 'black' }}>{game.name}</Card.Title>
                <Card.Text style={{ color: 'black' }}>${game.price}</Card.Text>
                <LinkContainer to='/cart'>
                    <Button disabled={game.countInStock === 0}
                    onClick={addToCartHandler}
                    className="rounded-btn btn-login" variant="primary">Add to cart</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    )
}

export default Game