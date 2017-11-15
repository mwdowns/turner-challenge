import React from 'react';
import Story from './story';

class Genres extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            stories: [],
            genres: [],
            clicked: false,
        })
        this.showInfo = this.showInfo.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(url) {
        fetch(url)
        .then(results => {
            return results.json();
        }).then (data => {
            let stories = [];
            data.data.map(function(story) {
                stories.push({source: story.source, description: story.description});
                return story;
            })
            this.setState({
                stories: stories,
            })
        })
    }

    componentDidMount() {
        this.fetchData('http://localhost:8000/storyline/' + this.props.titleID);
    }

    showInfo(data, genres) {
        if (this.state.clicked === true) {
            this.setState({
                clicked: false,
                genres: [],
            })
        } else {
            data.map(function(genre) {
                genres.push(
                    <div className="genreResults" key={genre}>{genre}</div>
                )
                return genre;
            })
            this.setState({
                genres: genres,
                clicked: true,
            });
        }
    }
    

    render() {
        let genres = [];
          
        return (
            <div>
                <div className="genreContainer">
                    <div className="genres"><button onClick={() => this.showInfo(this.props.genres, genres)}>Genres</button></div>
                    {this.state.genres}
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