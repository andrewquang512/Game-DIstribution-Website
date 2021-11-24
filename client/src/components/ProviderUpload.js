import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { uploadGameToServer } from '../actions/gameActions'
import Message from '../components/Message'

const ProviderUpload = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [publisher, setPublisher] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [countInStock, setCountInStock] = useState(0)
    const [icon, setIcon] = useState('')

    const takeUploadGame = useSelector(state => state.uploadGame)
    const { loading, success, error } = takeUploadGame

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(uploadGameToServer({
            name, publisher, category, description, price, countInStock, icon
        }))
    }

    return (
        <Row className="justify-content-center">
            <Col lg={5}>
                {success && (<Message variant="success" mess="Upload game successfully!" ></Message>)
                }
                <Form onSubmit={submitHandler}>
                    <Form.Group
                        className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            style={{ borderRadius: '6px' }}
                            type="text" placeholder="Enter name"
                            onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group
                        className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Publisher</Form.Label>
                        <Form.Control
                            style={{ borderRadius: '6px' }}
                            type="text" placeholder="Enter publisher"
                            onChange={(e) => setPublisher(e.target.value)} />
                    </Form.Group>

                    <Form.Group
                        className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            style={{ borderRadius: '6px' }}
                            type="text" placeholder="Enter category"
                            onChange={e => setCategory(e.target.value)} />
                    </Form.Group>

                    <Form.Group
                        className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            style={{ borderRadius: '6px' }}
                            type="text" placeholder="Enter description"
                            onChange={e => setDescription(e.target.value)} />
                    </Form.Group>


                    <Form.Group
                        className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            style={{ borderRadius: '6px' }}
                            type="text" placeholder="Enter price"
                            onChange={e => setPrice(Number(e.target.value))} />
                    </Form.Group>

                    <Form.Group
                        className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            style={{ borderRadius: '6px' }}
                            type="text" placeholder="Enter quantity"
                            onChange={e => setCountInStock(Number(e.target.value))} />
                    </Form.Group>

                    <Form.Group
                        className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            style={{ borderRadius: '6px' }}
                            type="file"
                            setIcon={e => setIcon(`/images/${e.target.value}`)} />
                    </Form.Group>

                    <Button
                        className="rounded-btn"
                        variant="info"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default ProviderUpload