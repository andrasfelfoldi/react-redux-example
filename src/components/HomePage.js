import React, { Component } from 'react';
import MovieTable from './MovieTable';
import { connect } from 'react-redux'
import { deleteMovieAction } from './../actions/movieActions';

class HomePage extends Component {
    render() {
        return (
            <MovieTable movies={this.props.movies} />
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteMovie: (movieId) => dispatch(deleteMovieAction(movieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
