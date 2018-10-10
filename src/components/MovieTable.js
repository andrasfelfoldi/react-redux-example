import React from 'react';
import { Table, Button } from 'reactstrap';

export default class MovieTable extends React.Component {

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.movies.map((movie, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{movie.title}</td>
                            <td>{movie.releaseDate}</td>
                            <td>{movie.rating}</td>
                            <Button color="danger">Delete</Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}