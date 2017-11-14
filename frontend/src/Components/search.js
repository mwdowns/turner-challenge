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
            value: event.target.value
        });
    }

    handleSubmit(event) {
        let search = this.state.value.toUpperCase();
        console.log(search)
        event.preventDefault();
        let result;
        this.props.titles.map(function(movie) {
            let title = movie.name.toUpperCase();
            
            if (search === title) {
                result = movie;
            }
            return movie;
        })
        this.state.results.push(result);
        this.setState({
            value: '',
        })
        
    }


    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
                <Results
                    result={this.state.results}
                />
                <Link to={`/fullList`}>See All Movies</Link>
            </div>
        )
    }
    
}

export default Search;