import React, { useEffect } from 'react'
import { Card, Button, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'

const Game = ({ game }) => {
  const dispatch = useDispatch()

  useEffect(() => {}, [dispatch])

  return (
    <Card
      className='rounded my-3 '
      style={{ width: '18rem', backgroundColor: '#020022' }}
    >
      <Link to={`/game/${game._id}`}>
        <Image
          className='hover-animation rounded-topLR'
          style={{ height: '160px', width: '100%' }}
          variant='top'
          src={game.icon}
        />
      </Link>
      <Card.Body
        className='test'
        style={{
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          backgroundColor: 'rgba(0, 0, 0, 0.76)',
          position: 'absolute',
          bottom: '0px',
          width: '18rem',
        }}
      >
        <Row>
          <Col sm={8}>
            <Link to={`/game/${game._id}`} style={{ textDecoration: 'none' }}>
              <Card.Title style={{ height: '36px', color: 'white' }}>
                {game.name}
              </Card.Title>
            </Link>
          </Col>
          <Col sm={4} style={{ textAlign: 'right' }}>
            <Card.Text style={{ color: 'white', fontSize: '0.8rem' }}>
              {game.price} VND
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Game
