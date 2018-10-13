import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { createMovieAction } from './../actions/movieActions';

class AddMovieForm extends React.Component {
    constructor(props){
        super(props);
        this.state={enteredTitle: "", enteredReleaseYear: new Date().getUTCFullYear(), enteredRating: 5, isTitleValid: null}

        this.onTitleInputValueChanged=this.onTitleInputValueChanged.bind(this);
        this.onReleaseYearSelectionChanged=this.onReleaseYearSelectionChanged.bind(this);
        this.onRatingSelectionChanged=this.onRatingSelectionChanged.bind(this);
    }

    onTitleInputValueChanged= function(enteredValue){
        let newText=enteredValue.target.value.toString();
        let isValid=newText.length > 0;
        this.setState({enteredTitle: newText, isTitleValid: isValid});
    }

    onReleaseYearSelectionChanged= function(newSelection){
        this.setState({enteredReleaseYear: newSelection.target.value});
    }

    onRatingSelectionChanged= function(newSelection){
        this.setState({enteredRating: newSelection.target.value});
    }

  render() {
    let currentYear=new Date().getUTCFullYear();
    let yearOptions=[];
    for(let year=1960; year<= currentYear; year++){
        yearOptions.unshift(<option key={year}>{year}</option>)
    }
    return (
      <Form style={{maxWidth: '30rem', margin: '2rem auto' }}>
        <FormGroup>
          <Label for="exampleEmail">Title</Label>
          <Input type="text" placeholder="Title"
            value={this.state.enteredTitle}  onChange={input => this.onTitleInputValueChanged(input)}
            valid={this.state.isTitleValid} invalid={!this.state.isTitleValid}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Year of Release</Label>
          <Input type="select" name="select" id="exampleSelect" value={this.state.enteredReleaseYear} onChange={this.onReleaseYearSelectionChanged}>
            {yearOptions}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Rating</Label>
          <Input type="select" name="select" id="exampleSelect"
            value={this.state.enteredRating} onChange={this.onRatingSelectionChanged}>
            <option key={1}>1</option>
            <option key={2}>2</option>
            <option key={3}>3</option>
            <option key={4}>4</option>
            <option key={5}>5</option>
            <option key={6}>6</option>
            <option key={7}>7</option>
            <option key={8}>8</option>
            <option key={9}>9</option>
            <option key={10}>10</option>
          </Input>
        </FormGroup>
      </Form>
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
        deleteMovie: (movieId) => dispatch(createMovieAction(movieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieForm);
