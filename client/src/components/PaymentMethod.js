import React, { useState } from 'react'
import { InputGroup, FormControl, Form, Row, Col, ProgressBar, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentMethod = ({ history }) => {
    const dispatch = useDispatch()
    const [paymentMethod, setPaymentMethod] = useState('paypal')

    const submitHandler = () => {    
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/checkout')
    }

    return (
        <Row className="justify-content-center">
            <Col md={6}>
                <h2 className="text-center text-blue2"
                >CHOOSE YOUR PAYMENT METHOD</h2>
                <ProgressBar now={75}
                    style={{ marginBottom: '20px', borderRadius: '8px' }}
                    variant="info"
                    label="75%"
                    animated />
                <Form onSubmit={submitHandler}>
                    <Form.Label className="my-3">Select payment method</Form.Label>
                    <div style={{ marginLeft: '20px', marginBottom: '20px' }}>
                        <Form.Check
                            type='radio'
                            label="PayPal"
                            value="paypal"
                            id="test"
                        />
                        <Form.Check
                            type='radio'
                            label="Ship Code"
                            value="ship-code"
                            id="test"
                        />
                    </div>
                    <Button type="submit"
                        variant="info"
                        className="rounded-btn my-2">Continue</Button>
                </Form>
            </Col >
        </Row >
    )

}

export default PaymentMethod