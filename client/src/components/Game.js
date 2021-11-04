import React, { useEffect } from 'react'
import { Card, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'

const Game = ({ game }) => {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [dispatch])

    return (
        <Card className="rounded my-3"
        style={{ width: '18rem', height: '19rem', backgroundColor:'#020022' }}>
            <Link to={`/game/${game._id}`}>
                <Image className="hover-animation rounded-topLR" style={{ height: '160px', width:'100%'}} variant="top" src={game.icon}/>
            </Link>
            <Card.Body className='test'
            style={{borderBottomLeftRadius:'8px', borderBottomRightRadius:'8px'}}>
                <Link to={`/game/${game._id}`} style={{textDecoration:'none'}}>
                    <Card.Title className="text-blue hover-animation" style={{ height:'36px' }}>{game.name}</Card.Title>
                </Link>
                <Card.Text style={{ color: 'black', marginBottom:'6px' }}>Publisher: {game.publisher}</Card.Text>
                <Card.Text style={{ color: 'black' }}>Price: {game.price} VND</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Game