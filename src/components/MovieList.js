import React from 'react'

const MovieList = (props) => {

    return (
        <div className="row">
            {
                props.movies.map((movie, i) => (

                    <div className="col-lg-4" key={i}>

                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />

                            <div className=" card-body">
                                <h5 className="card-title">
                                    {movie.name}
                                </h5>
                                <p className="card-text" style={{ height: 200, overflow: 'hidden' }}>{movie.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button onClick={(e) => { props.deleteMovieProp(movie) }} type="button" className="btn btn-outline-primary">
                                        Delete
                                    </button>
                                    <h2>
                                        <span className="badge bg-dark badge-secondary">
                                            {movie.rating}
                                        </span>
                                    </h2>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default MovieList