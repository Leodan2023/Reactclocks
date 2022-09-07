import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Total Clocks',
    color: 'primary', 
    cuantity: '95',
    icon: 'fas fa-fw fa-folder'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total Categories', 
    color:'success', 
    cuantity: '5',
    icon:'fas fa-fw fa-folder'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Total Users' ,
    color:'warning',
    cuantity:'4',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;