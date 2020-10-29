import React from 'react'

import './Rating.css';

const Rating = ({ avg_rating, count }) => {
    if(count === 0){
        return(
            <div className='rating'>
                <span>Yet to be reviewed</span>
            </div>
        )
    }else{
        const rating = parseInt(avg_rating)
        const color = (rating>3) ? '#FFF476' : '#FF7D76'
        return (
            <div className='rating'>
                <span>
                    <i style={{color}}
                     className={
                        rating >= 1
                        ? 'fas fa-star'
                        : rating >= 0.5
                        ? 'fas fa-start-half-alt'
                        : 'far fa-star'
                    }></i>
                </span>
                <span>
                    <i style={{color}} 
                    className={
                        rating >= 2
                        ? 'fas fa-star'
                        : rating >= 1.5
                        ? 'fas fa-start-half-alt'
                        : 'far fa-star'
                    }></i>
                </span>
                <span>
                    <i style={{color}}
                    className={
                        rating >= 3
                        ? 'fas fa-star'
                        : rating >= 2.5
                        ? 'fas fa-start-half-alt'
                        : 'far fa-star'
                    }></i>
                </span>
                <span>
                    <i style={{color}}
                    className={
                        rating >= 4
                        ? 'fas fa-star'
                        : rating >= 3.5
                        ? 'fas fa-start-half-alt'
                        : 'far fa-star'
                    }></i>
                </span>
                <span>
                    <i style={{color}}
                    className={
                        rating >= 5
                        ? 'fas fa-star'
                        : rating >= 4.5
                        ? 'fas fa-start-half-alt'
                        : 'far fa-star'
                    }></i>
                </span>
                <span> {count} ratings</span>
            </div>
        )
    }
}

export default Rating
