import React from 'react';
import { Table, Button } from 'reactstrap';
import { connect } from 'react-redux'
import { deleteMovieAction } from './../actions/movieActions';

class MovieTable extends React.Component {

    deleteMovie=function(movie){

    }

    render() {
        return (
            <Table style={{maxWidth: '50rem', margin: '2rem auto' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Year of Release</th>
                        <th>Rating</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.movies.map((movie, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{movie.title}</td>
                            <td>{movie.releaseYear}</td>
                            <td>{movie.rating}</td>
                            <td><Button color="danger" onClick={(movie) => this.deleteMovie(movie)}>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = state => {
    return {
        // movies: state.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteMovieDispatch: (movieId) => dispatch(deleteMovieAction(movieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieTable);
