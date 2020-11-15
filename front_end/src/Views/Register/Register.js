import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../Components/Message/Message'
import Loader from '../../Components/Loader/Loader'
import { register } from '../../actions/userActions'
import Navbar from '../../Components/Template/Nav/Nav'
import FormContainer from '../../Components/FormContainer/FormContainer'

import "./Register.css";

const Register = ({ location }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const submitHandler = (e) => {
        e.preventDefault()
        if(firstName === ''){
            setMessage('First name Required')
        } else if(email === ''){
            setMessage('Email Required')
        } else if(password !== confirmPassword){
            setMessage('Passwords do not match')
        } else {
            dispatch(register(firstName, lastName, email, password))
        }
    }
    return (
        <>  
            <Navbar/>
            <FormContainer>
                <h1 className='py-3'>Register</h1>
                {userInfo && <Message variant='danger'> {userInfo.message} </Message>}
                {message && <Message variant='danger'> {message} </Message>}
                {error && <Message variant='danger'> {error} </Message>}
                {loading && <Loader/>}
                <Form onSubmit={submitHandler}>
                    <Row>
                        <Col>
                            <Form.Group controlId='firstName'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                type='name' 
                                placeholder='Enter your first name' 
                                value = {firstName}
                                onChange= {(e)=> setFirstName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId='lastName'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                type='name' 
                                placeholder='Enter your last name' 
                                value = {lastName}
                                onChange= {(e)=> setLastName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        type='email' 
                        placeholder='Enter a valid email' 
                        value = {email}
                        onChange= {(e)=> setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password </Form.Label>
                        <Form.Control 
                        type='password' 
                        placeholder='Enter the password' 
                        value = {password}
                        onChange= {(e)=> setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='confirm-password'>
                        <Form.Label>Confirm Password </Form.Label>
                        <Form.Control 
                        type='password' 
                        placeholder='Re-enter the password' 
                        value = {confirmPassword}
                        onChange= {(e)=> setConfirmPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>Register</Button>
                </Form>

                <Row className='py-3'>
                    <Col>
                        Already Registerd?{' '}
                        <Link to={redirect? `/login?redirect=${redirect}` : '/login' }>
                            Sign In
                        </Link>
                    </Col>
                </Row>

            </FormContainer>
        </> 
    )
}

export default Register;