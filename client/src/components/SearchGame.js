import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchGameAction } from '../actions/gameActions'
import { Row, Col, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Message from './Message'
import Loading from './Loading'
import Game from './Game'

const SearchGame = () => {
    const location = useLocation()
    const searchValue = location.search.split('=')[1]
    const dispatch = useDispatch()

    console.log(location)

    const { loading, searchGame, error } = useSelector(state => state.gameSearch)

    useEffect(() => {
        dispatch(searchGameAction(searchValue))
    }, [dispatch])

    return (
        <>
            <Link to="/">
                <Button className="btn-login rounded-btn" style={{ color: 'white' }} type="button" variant="dark">Back</Button>
            </Link>

            {error && <Message mess={error}></Message>}
            {loading ? <Loading /> : error ? <Message mess={error}></Message> :
                searchGame ? (
                    <>
                        <Row className="align-items-center" style={{ color: 'white', fontWeight: '500', height: '50px' }}>
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
                                <Card className="text-center filter-main-color rounded-btn"
                                    style={{ color: 'white', marginTop: '18px' }}
                                >
                                    <Card.Header>Featured</Card.Header>
                                    <Card.Body style={{ paddingLeft: '0', paddingRight: '0' }}>
                                        <div style={{ height: '40px', lineHeight: '40px' }} className="btn-login">
                                            Price
                                        </div>
                                        <Form style={{ padding: '20px 20px 0 20px' }}>
                                            <div key={'price-checkbox'} >
                                                <LinkContainer to="/filter?price=0-100">
                                                    <Form.Check
                                                        label="0 - 100000 VND"
                                                        name="group1"
                                                        type='checkbox'
                                                        id="price-1"
                                                    />
                                                </LinkContainer>

                                                <LinkContainer to="/filter?price=100-200">
                                                    <Form.Check
                                                        label="100000 - 200000 VND"
                                                        name="group1"
                                                        type='checkbox'
                                                        id="price-2"
                                                    />
                                                </LinkContainer>

                                                <LinkContainer to="/filter?price=200+">
                                                    <Form.Check
                                                        label=">= 200000 VND"
                                                        type='checkbox'
                                                        id="price-3"
                                                    />
                                                </LinkContainer>

                                            </div>
                                        </Form>
                                    </Card.Body>
                                    <Card.Body style={{ paddingLeft: '0', paddingRight: '0' }}>
                                        <div style={{ height: '40px', lineHeight: '40px' }} className="btn-login">
                                            Category
                                        </div>
                                        <Form style={{ padding: '20px 20px 0 20px' }}>
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <LinkContainer to="/filter?category=adventure">
                                                        <Form.Check
                                                            label="Adventure"
                                                            name="group1"
                                                            type={type}
                                                            id={`inline-${type}-1`}
                                                        />
                                                    </LinkContainer>

                                                    <LinkContainer to="/filter?category=survival">
                                                        <Form.Check
                                                            label="Survival"
                                                            name="group1"
                                                            type={type}
                                                            id={`inline-${type}-2`}
                                                        />
                                                    </LinkContainer>

                                                    <LinkContainer to="/filter?category=strategy">
                                                        <Form.Check
                                                            label="Strategy"
                                                            type={type}
                                                            id={`inline-${type}-3`}
                                                        />
                                                    </LinkContainer>

                                                    <LinkContainer to="/filter?category=puzlle">
                                                        <Form.Check
                                                            label="Puzlle"
                                                            type={type}
                                                            id={`inline-${type}-3`}
                                                        />
                                                    </LinkContainer>
                                                </div>
                                            ))}
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={9}>
                                <Row>
                                    {searchGame.map(game => (
                                        <Col className="flex-wrap" xs={12} sm={12} md={6} xl={4}>
                                            <Game game={game} />
                                        </Col>
                                    )
                                    )}
                                </Row>
                            </Col>
                        </Row>
                    </>
                ) : <Message mess="No game founded!"></Message>}
        </>
    )
}

export default SearchGame