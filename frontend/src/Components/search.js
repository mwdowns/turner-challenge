import React from 'react';
import Results from './results';
import { Link } from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            results: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            results: [],
        });
    }

    handleSubmit(event) {
        let search = this.state.value.toUpperCase();
        console.log(search)
        event.preventDefault();
        let result = '';
        this.props.titles.map(function(movie) {
            let title = movie.name.toUpperCase();
            if (search === title) {
                result = movie;
            }
            return movie;
        })
        if (result === '') {
            result = "Movie not found. Womp womp! Try searching again!";
        }
        this.state.results.push(result);
        this.setState({
            value: '',
        })
        
    }


    render() {
        
        return (
            <div className="homeContainer">
                <div className="header">
                    <h1>Hello, puny human! What entertainment would you like to search for today?</h1>
                </div>
                <div className="searchDiv">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className="searchbar"
                            type="text"
                            placeholder="Search..."
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </form>
                </div>
                <div className ="results">
                    <Results
                        result={this.state.results}
                    />
                </div>
                <div className="link">
                    <Link to={`/fullList`}>See All Movies</Link>
                </div>
            </div>
        )
    }
    
}

export default Search;