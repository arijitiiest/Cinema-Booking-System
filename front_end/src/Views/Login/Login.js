import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../Components/Message/Message";
import Loader from "../../Components/Loader/Loader";
import { login } from "../../actions/userActions";
import Navbar from "../../Components/Template/Nav/Nav";
import Footer from '../../Components/Template/Footer/Footer'
import FormContainer from "../../Components/FormContainer/FormContainer";

import "./Login.css";

const Login = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  // useEffect(() => {
  //     if(userInfo) {
  //         history.push(redirect)
  //     }
  // },[history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    if (location.state && location.state.SeatArrangement)
      history.push("/payment");
    else history.push(redirect);
  };
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <FormContainer>
        <h1 className="py-3">Sign In</h1>
        {error && <Message variant="danger"> {error} </Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter a valid email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter the password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            New Customer?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
    </>
  );
};

export default Login;
