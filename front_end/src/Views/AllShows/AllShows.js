import React,{ useEffect } from "react";
// import Header from "../../Components/Template/Header/Header";
import { Container, Row, Col } from 'react-bootstrap';
import Footer from "../../Components/Template/Footer/Footer";
import Navbar from "../../Components/Template/Nav/Nav";
import Show from "../../Components/Show/Show";
import { Link } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader';
import Message from '../../Components/Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { listShows } from "../../actions/showsAction";

const Home = () => {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listShows())
    }, [dispatch])  
    
    const showList = useSelector(state => state.showList)
    const { loading, shows, error } = showList

    if (loading) {
        return(
            <div>
                <Navbar/>
                <Loader/>
                <Footer/>
            </div>
        )
    } else if(error) {
        return(
            <div>
                <Navbar/>
                <Message variant='danger'> {error} </Message>
                <Footer/>
            </div>
        )
    } else{
        return (
            <div>
                <Navbar />
                <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
                <main className="py-3">
                    <Container>
                        <h1>Latest Shows</h1>
                        <Row>
                            {shows.map(show => (
                                <Col key={show.id} sm={24} md={12} lg={8} xl={6}>
                                    <Show key={show.id} show={show} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Home;