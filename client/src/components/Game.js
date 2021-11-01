import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Game = ({ game }) => {
    const addToCartHandler = () => {

    }

    return (
        <Card className="rounded my-3" style={{ width: '18rem', height: '20rem' }}>
            <Card.Img style={{ height: '180px' }} variant="top" src={game.icon} />
            <Card.Body className='test'>
                <Card.Title style={{ color: 'black' }}>{game.name}</Card.Title>
                <Card.Text style={{ color: 'black' }}>${game.price}</Card.Text>
                <LinkContainer to='/cart'>
                    <Button disabled={game.countInStock === 0}
                         className="rounded-btn btn-login" variant="primary">Add to cart</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    )
}

export default Game