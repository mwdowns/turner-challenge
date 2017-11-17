import React from 'react';

class Genres extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            genres: [],
            clicked: false,
        })
        this.showInfo = this.showInfo.bind(this);
    }

    showInfo(data, genres) {
        if (this.state.clicked === true) {
            this.setState({
                clicked: false,
                genres: [],
            })
        } else {
            let genreArr = data.map(function(genre, index) {
                return (
                    <div className="genreResults" key={index}>{genre.genre}</div>
                )
            })
            this.setState({
                genres: genreArr,
                clicked: true,
            });
        }
    }
    
    render() {
        console.log(this.state.genres);
        return (
            <div className="genreContainer">
                <div className="genres"><button className="infoBtn" onClick={() => this.showInfo(this.props.genres, this.state.genres)}>Genres</button></div>
                {this.state.genres}
            </div>
        )
    }
    
}

export default Genres;