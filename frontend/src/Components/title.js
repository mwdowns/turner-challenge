import React from 'react';
import $ from 'jquery';
import Genres from './genre';

class Title extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            genres: [],
        })
    }

    componentDidMount() {
        $.get('http://localhost:8000/genre/' + this.props.titleID, (genresFromApi) => {
            let genres = [];
            genresFromApi.data.map(function(x) {
                genres.push(x.genre);
                return x;
            })
            this.setState({
                genres: genres,
            })
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    <div className="title">{this.props.name}</div>
                    <div className="year">{this.props.year}</div>
                </div>
                <Genres 
                    genres={this.state.genres}
                    titleID={this.props.titleID} 
                />
            </div>
        )
    }
}

export default Title;