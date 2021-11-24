import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const Provider = ({ history }) => {
    const allMyProdHandler = () => {
        history.push('/provider/products')
    }

    const uploadHandler = () => {
        history.push('/provider/upload')
    }

    return (
        <Row
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '75vh',
            }}>
            <Col lg={3}>
                <Button
                className="rounded-btn" 
                variant="info"
                onClick={uploadHandler}>UPLOAD</Button>            
            </Col>    

            <Col lg={3}>
                <Button
                className="rounded-btn" 
                variant="info"
                onClick={allMyProdHandler}>ALL MY PRODUCTS</Button>            
            </Col>    

        </Row>
    )
}

export default Provider