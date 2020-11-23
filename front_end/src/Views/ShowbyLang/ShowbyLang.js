import React,{ useEffect } from "react";
import { Container, ListGroup } from 'react-bootstrap';
import Footer from "../../Components/Template/Footer/Footer";
import Navbar from "../../Components/Template/Nav/Nav";
import ShowbyMovie from "../../Components/ShowbyMovie/ShowbyMovie";
import { Link } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader';
import Message from '../../Components/Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { listShowbyLang } from "../../actions/showsAction";

const ShowbyLang = ({ location }) => {
    
    const movie_id = location.search.split('=')[1].split('&')[0]
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

        if(shows.length === 0){
            return(
                <div>
                    <Navbar/>
                    <Message children='Currently no shows are available please check after some time' />
                    <Footer/>
                </div>
            )
        }
        else{
            const movie = shows[0].movie;
            return (
                <div style={{
                    backgroundImage: `url(/media/show/${movie.image_url}`,
                  }}>
                    <Navbar />
                    <Link className='btn btn-dark my-3' to={`/movie/${movie_id}`} >Go Back</Link>
                    <main className="py-3" >
                        <Container>
                            <ListGroup>
                                <ListGroup.Item style={{background: 'rgb(240,240,240)'}}>
                                    <h1> {movie.title} </h1>
                                </ListGroup.Item>
                                <br></br>
                                <br></br>
                                {/* <ListGroup.Item>
                                    <Image src={`/media/show/${movie.image_url}`} alt={movie.title} fluid /> 
                                </ListGroup.Item> */}

                                {shows.map((show, key) => (
                                    <span key={show.id}>
                                    <>
                                        <ShowbyMovie key={show.id} show={show}  />
                                    </>
                                    <br></br>
                                    <br></br>
                                    </span>
                                ))}
                            </ListGroup>
                        </Container>
                    </main>
                    <Footer />
                </div>
            )
        }
    }
}

export default ShowbyLang