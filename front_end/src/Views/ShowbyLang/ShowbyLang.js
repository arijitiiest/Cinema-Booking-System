import React,{ useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Footer from "../../Components/Template/Footer/Footer";
import Navbar from "../../Components/Template/Nav/Nav";
import ShowbyMovie from "../../Components/ShowbyMovie/ShowbyMovie";
import { Link } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader';
import Message from '../../Components/Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { listShowbyLang } from "../../actions/showsAction";

const ShowbyLang = ({ location }) => {
    
    const movie_id = location.search.split('=')[1][0]
    const lang = location.search.split('=')[2]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listShowbyLang(movie_id, lang))
    }, [dispatch, movie_id, lang])  
    
    const showbyLangList = useSelector(state => state.showbyLangList)
    const { loading, shows, error } = showbyLangList

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
                <Link className='btn btn-dark my-3' to={`/movie/${movie_id}`}>Go Back</Link>
                <main className="py-3">
                    <Container>
                        <h1>Latest Shows</h1>
                        <Row>
                            <Col>
                            </Col>
                            <Col sm={24} md={12} lg={8} xl={6}>
                                {shows.map(show => (
                                    <ShowbyMovie key={show.id} show={show}  />
                                ))}
                            </Col>
                        </Row>
                    </Container>
                </main>
                <Footer />
            </div>
        )
    }
}

export default ShowbyLang