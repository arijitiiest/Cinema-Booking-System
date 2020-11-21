import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = () => {
    const [keyword, setKeyword] = useState('')
    return (
        <Form onSubmit={submitHandler} inline>
            
        </Form>
    )
}

export default SearchBox
