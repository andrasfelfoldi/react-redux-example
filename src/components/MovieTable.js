import React from 'react';
import { Table, Button } from 'reactstrap';

export default class MovieTable extends React.Component {

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
                            {/* <Button color="danger">Delete</Button> */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}