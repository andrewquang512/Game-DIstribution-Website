import React, { useEffect } from 'react'
import { Row, Col, Nav, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listAllGames } from '../actions/gameActions'

import Loading from './Loading'
import Message from './Message'
import Game from './Game'

const Home = () => {
    const dispatch = useDispatch()

    const gameList = useSelector(state => state.gameList)

    const { error, loading, games } = gameList

    useEffect(() => {

        dispatch(listAllGames())

    }, [dispatch])

    return (
        <>
            {error && <Message mess={error}></Message>}
            {loading ? <Loading /> : error ? <Message mess={error}></Message> :
                games ? (
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
                                test
                            </Col>
                            <Col md={9}>
                                <Row>
                                    {games.map(game => (
                                        <Col className="flex-wrap" xs={12} sm={12} md={6} xl={4}>
                                            <Game game={game} />
                                        </Col>
                                    )
                                    )}
                                </Row>
                            </Col>
                        </Row>
                    </>
                ) : <Loading />}
        </>
    )
}

export default Home