import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ mess, variant }) => {
    return (
        <Alert variant={variant}>
            {mess}
        </Alert>
    )
}

Message.defaultProps = {
    variant: 'warning'
}

export default Message