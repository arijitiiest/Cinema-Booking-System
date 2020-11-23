import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { profileDetails } from "../../actions/profileActions";
import Loader from "../../Components/Loader/Loader";
import Footer from "../../Components/Template/Footer/Footer";
import Navbar from "../../Components/Template/Nav/Nav";
import Message from "../../Components/Message/Message";

import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Ticket from "../../Components/Ticket/Ticket";

const Profile = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileDetails());
  }, [dispatch]);

  const { loading, user, bookings, error } = useSelector(
    (state) => state.profile
  );

  if (loading) {
    return (
      <div>
        <Navbar />
        <Loader />
        <Footer />
      </div>
    );
  } else if (error) {
    return (
      <div>
        <Navbar />
        <Message variant="danger"> {error} </Message>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "3rem",
            backgroundColor: "white",
            minHeight: "700px",
          }}
        >
          <Row style={{ width: "100%" }}>
            <Col
              xs={4}
              id="sidebar-wrapper"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Image
                src="/media/me.png"
                style={{ width: "200px", borderRadius: "50%" }}
              />
              <div
                style={{
                  padding: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                <div>
                  {user.first_name} {user.last_name}
                </div>
                <div>{user.email}</div>
              </div>
            </Col>
            <Col xs={8} id="page-content-wrapper">
              <Container style={{ width: "100%" }}>
                <div style={{ fontSize: "24px" }}>Tickets:</div>
                {bookings.length == 0 ? (
                  <div>No Bookings Yet</div>
                ) : (
                  <div>
                    {bookings.map((ticket) => (
                      <Ticket key={ticket.id} ticket={ticket} />
                    ))}
                  </div>
                )}
              </Container>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }

  return <div></div>;
};

export default Profile;
