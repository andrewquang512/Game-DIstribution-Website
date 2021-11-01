import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
    return (
        <Spinner
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100px', height: '100px' }}
            animation="border" />
    )
}

export default Loading