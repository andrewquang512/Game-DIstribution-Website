import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, ProgressBar, Button, Toast } from 'react-bootstrap'
import { saveShippingInfo } from '../actions/cartActions'

const ShippingAddress = ({ history }) => {
    const dispatch = useDispatch()

    const [address, setAddress] = useState('')
    const [district, setDistrict] = useState('')
    const [province, setProvince] = useState('')
    const [country, setCountry] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    const cart = useSelector(state => state.cart)

    const submitHandler = (e) => {
        e.preventDefault()

        if (!address || !district || !province || !country || !phoneNumber) {
            setShowA(true)
        } else {
            dispatch(saveShippingInfo({
                address,
                district,
                province,
                country,
                phoneNumber
            }))
            history.push('/payment')
        }
    }
    return (
        <Row className="justify-content-center">
            <Col md={6}>
                <Toast show={showA}
                    onClose={toggleShowA}
                    style={{ marginBottom: '10px', borderRadius: '8px' }}
                    bg="warning"
                >
                    <Toast.Header style={{ borderRadius: '8px', padding: '10px', paddingLeft: '30px ' }}>
                        <strong className="me-auto">Please fill out the form completely</strong>
                    </Toast.Header>
                </Toast>
                <h2 className="text-center text-blue2"
                >THE DELIVERY INFORMATION</h2>
                <ProgressBar now={50}
                    style={{ marginBottom: '20px', borderRadius: '8px' }}
                    variant="info"
                    label="50%"
                    animated />
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text"
                            style={{ borderRadius: '8px' }}
                            placeholder="Enter the address"
                            onFocus={() => setShowA(false)}
                            onChange={(e) => setAddress(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>District</Form.Label>
                        <Form.Control type="text"
                            style={{ borderRadius: '8px' }}
                            placeholder="Enter the district"
                            onFocus={() => setShowA(false)}
                            onChange={(e) => setDistrict(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Province</Form.Label>
                        <Form.Control type="text"
                            style={{ borderRadius: '8px' }}
                            placeholder="Enter the province"
                            onFocus={() => setShowA(false)}
                            onChange={(e) => setProvince(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text"
                            style={{ borderRadius: '8px' }}
                            placeholder="Enter the country"
                            onFocus={() => setShowA(false)}
                            onChange={(e) => setCountry(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text"
                            style={{ borderRadius: '8px' }}
                            placeholder="Enter the phone number"
                            onFocus={() => setShowA(false)}
                            onChange={(e) => setPhoneNumber(e.target.value)} />
                    </Form.Group>
                    <Button type="submit"
                        className="rounded-btn my-2"
                        variant="info"
                        onClick={submitHandler}>Continue</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default ShippingAddress