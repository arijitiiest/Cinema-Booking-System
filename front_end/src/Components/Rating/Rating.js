import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ratingDetails } from '../../actions/ratingDetailsAction'

import './Rating.css';
import Message from '../Message/Message';

const Rating = ({ id, reducer_id }) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ratingDetails(id))
    }, [dispatch, id]) 

    const detailRating = useSelector(state => state.detailRating)
    const { loading, rating, error} = detailRating

    

    if(loading) {
        return(
            <div>
                <h5>Loading rating..</h5>
            </div>
        )
    
    } else if(error) {
        return(
            <>
                <Message variant='danger'> {error} </Message>
            </>
        )
    } else{
        const count = rating[reducer_id] ? parseInt(rating[reducer_id].count_rating) : 0
        
        const avg_rating = rating[reducer_id] ? rating[reducer_id].avg_rating : 0
        // const count = 5
        // const avg_rating = 4
        // console.log(avg_rating)
        if(count === 0){
            return(
                <div className='rating'>
                    <span>Yet to be rated</span>
                </div>
            )
        }else{
            const rating_avg = parseInt(avg_rating)
            const color = (rating_avg>3) ? '#FFF476' : '#FF7D76'
            return (
                <div className='rating'>
                    <span>
                        <i style={{color}}
                         className={
                            rating_avg >= 1
                            ? 'fas fa-star'
                            : rating_avg >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                        }></i>
                    </span>
                    <span>
                        <i style={{color}} 
                        className={
                            rating_avg >= 2
                            ? 'fas fa-star'
                            : rating_avg >= 1.5
                            ? 'fas fa-start-half-alt'
                            : 'far fa-star'
                        }></i>
                    </span>
                    <span>
                        <i style={{color}}
                        className={
                            rating_avg >= 3
                            ? 'fas fa-star'
                            : rating_avg >= 2.5
                            ? 'fas fa-start-half-alt'
                            : 'far fa-star'
                        }></i>
                    </span>
                    <span>
                        <i style={{color}}
                        className={
                            rating_avg >= 4
                            ? 'fas fa-star'
                            : rating_avg >= 3.5
                            ? 'fas fa-start-half-alt'
                            : 'far fa-star'
                        }></i>
                    </span>
                    <span>
                        <i style={{color}}
                        className={
                            rating_avg >= 5
                            ? 'fas fa-star'
                            : rating_avg >= 4.5
                            ? 'fas fa-start-half-alt'
                            : 'far fa-star'
                        }></i>
                    </span>
                    <span> {count} ratings</span>
                </div>
            )
        }
    }
}

export default Rating
