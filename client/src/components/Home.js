import React from 'react'
import { Row, Col, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Home = () => {
    return (
        <>
        <Row className="align-items-center" style={{ color: 'white', fontWeight: '500', height:'50px' }}>
            <Col md={3}>
            </Col>
            <Col md={9}>
                Newest Realease
                Coming Soon
                On Sale
            </Col>
        </Row>

        <Row>
            <Col md={3}>
                test
            </Col>
            <Col md={9}>
                bla
            </Col>
        </Row>
        </>
    )
}

export default Home