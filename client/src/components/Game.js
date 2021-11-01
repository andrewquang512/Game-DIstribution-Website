import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'

const Game = () => {
  return (
    <Card>
      <Link></Link>
      <Card.Body>
        <Row>
          <Col>
            <Link>
              <Card.Title></Card.Title>
            </Link>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Game
