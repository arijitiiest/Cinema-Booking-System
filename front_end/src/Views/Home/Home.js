import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Header from "../../Components/Template/Header/Header";
import Footer from "../../Components/Template/Footer/Footer";
import Navbar from "../../Components/Template/Nav/Nav";
import Movie from "../../Components/Movie/Movie";
import Loader from "../../Components/Loader/Loader";
import Message from "../../Components/Message/Message";

import { listMovies } from "../../actions/moviesAction";

import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import "./Home.css";

const Home = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMovies(keyword));
  }, [dispatch, keyword]);

  const movieList = useSelector((state) => state.movieList);
  const { loading, movies, error } = movieList;

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

        <main>
          <Carousel className="py-2">
            <Carousel.Item interval={2000}>
              <div
                style={{
                  backgroundImage: "url('/media/show/default.jpg'",
                }}
              >
                <div style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
                  <Container>
                    <img
                      className="d-block w-100"
                      src="/media/show/default.jpg"
                      alt=""
                      height="500px"
                    />
                    <Carousel.Caption>
                      <Button variant="danger" size="sm">
                        Book now
                      </Button>
                    </Carousel.Caption>
                  </Container>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div
                style={{
                  backgroundImage: "url('/media/show/patherpanchali.jpg'",
                }}
              >
                <div style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
                  <Container>
                    <img
                      className="d-block w-100"
                      src="/media/show/patherpanchali.jpg"
                      alt=""
                      height="500px"
                    />
                    <Carousel.Caption>
                      <Button variant="danger" size="sm">
                        Book now
                      </Button>
                    </Carousel.Caption>
                  </Container>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div
                style={{
                  backgroundImage: "url('/media/show/sonarkella.jpg'",
                }}
              >
                <div style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
                  <Container>
                    <img
                      className="d-block w-100"
                      src="/media/show/sonarkella.jpg"
                      alt=""
                      height="500px"
                    />
                    <Carousel.Caption>
                      <Button variant="danger" size="sm">
                        Book now
                      </Button>
                    </Carousel.Caption>
                  </Container>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div
                style={{
                  backgroundImage: "url('/media/show/twodaughters.jpg'",
                }}
              >
                <div style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
                  <Container>
                    <img
                      className="d-block w-100"
                      src="/media/show/twodaughters.jpg"
                      alt=""
                      height="500px"
                    />
                    <Carousel.Caption>
                      <Button variant="danger" size="sm">
                        Book now
                      </Button>
                    </Carousel.Caption>
                  </Container>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>

          <Container>
            <h1
              style={{
                fontSize: "24px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                paddingTop: "2rem",
              }}
            >
              Latest Movies
            </h1>
            <Row>
              {movies.map((movie, key) => (
                <Col key={key} sm={12} md={6} lg={4} xl={3}>
                  <Movie movie={movie} reducer_id={key} />
                </Col>
              ))}
            </Row>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }
};

export default Home;
