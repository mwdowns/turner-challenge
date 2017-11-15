import React from 'react';
import $ from 'jquery';
import Genres from './genre';

class Title extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            genres: [],
        })
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(url) {
        fetch(url)
        .then(results => {
            return results.json();
        }).then (data => {
            let genres = [];
            data.data.map(function(genre) {
                genres.push(genre.genre);
                return genre;
            })
            console.log(genres);
            this.setState({
                genres: genres,
            })
        })
    }

    componentDidMount() {
        this.fetchData('http://localhost:8000/genre/' + this.props.titleID);
    }
    
    render() {
        return (
            <div>
                <div className="title">{this.props.name}</div>
                <div className="year">{this.props.year}</div>
                <Genres 
                    genres={this.state.genres}
                    titleID={this.props.titleID} 
                />
            </div>
        )
    }
}

export default Title;