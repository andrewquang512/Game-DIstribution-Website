import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'

const Game = ({ game }) => {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [dispatch])

    return (
        <Card className="rounded my-3" style={{ width: '18rem', height: '22rem' }}>
            <Link to={`/game/${game._id}`}>
                <Card.Img style={{ height: '180px' }} variant="top" src={game.icon} />
            </Link>
            <Card.Body className='test'>
                <Link to={`/game/${game._id}`} style={{textDecoration:'none'}}>
                    <Card.Title style={{ color: 'black' }}>{game.name}</Card.Title>
                </Link>
                <Card.Text style={{ color: 'black' }}>Publisher: {game.publisher}</Card.Text>
                <Card.Text style={{ color: 'black' }}>Price: ${game.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Game