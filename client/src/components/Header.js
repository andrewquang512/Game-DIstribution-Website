import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav, Form, NavDropdown, Button, FormControl, Dropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userAction'


const Header = ({ history }) => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { user } = userLogin

    const logoutHandler = (e) => {
        e.preventDefault()

        dispatch(logout())
    }
    const searchHandler = () => {
        history.push(`/search?q=${searchValue}`)
    }

    useEffect(() => {

    }, [dispatch, userLogin])
    return (
        <header>
            <Navbar style={{ height: '80px', color: 'white' }} bg="dark" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand><span className="text-blue">READY2</span>PLAY</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */}
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onInput={(e) => setSearchValue(e.target.value)}
                            />
                            <Button onClick={searchHandler} className="rounded-btn" variant="outline-success">Search</Button>
                        </Form>
                        <LinkContainer to="/cart">
                            <Nav.Link className="text-blue">
                                <i className="fas fa-shopping-cart"></i>Cart
                            </Nav.Link>
                        </LinkContainer>
                        {user ?
                            (
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ borderRadius: '10px' }}>
                                        {user.name}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">My profile</Dropdown.Item>
                                        <LinkContainer to="/myorder">
                                            <Dropdown.Item>My order</Dropdown.Item>
                                        </LinkContainer>
                                        <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>) : (

                                <LinkContainer to='/login'>
                                    <Button className="btn-login rounded-btn" type="button" variant="primary">Login</Button>
                                    {/* <Nav.Link style={{ color: 'white' }}>Login</Nav.Link> */}
                                </LinkContainer>
                            )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header