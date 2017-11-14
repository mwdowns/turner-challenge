import React from 'react';
import $ from 'jquery';
import Story from './story';

class Genres extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            stories: [],
        })
    }

    componentDidMount() {
        $.get('http://localhost:8000/storyline/' + this.props.titleID, (storiesFromApi) => {
            let stories = [];
            storiesFromApi.data.map(function(x) {
                stories.push({source: x.source, description: x.description});
                return x;
            })
            this.setState({
                stories: stories,
            })
        })
    }
    

    render() {
        // console.log(this.props.genres);
        let genres = this.props.genres.map(function(genre) {
            return (
                <div key={genre}>{genre}</div>
            )
        })
        return (
            <div>
                <div className="genreContainer">
                    <div className="genres">Genres:</div>
                    <div className="genreResults">{genres}</div>
                </div>
                <Story 
                    stories={this.state.stories}
                    titleID={this.props.titleID}
                />
            </div>
        )
    }
    
}

export default Genres;