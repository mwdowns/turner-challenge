import React from 'react';
import { Link } from 'react-router-dom';
import Title from './title';
import Genres from './genre.js';
import Story from './story.js';
import Cast from './cast.js';
import Awards from './awards.js';
import AltTitles from './altTitles.js';

class SinglePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleID: this.props.match.params.id,
        }
        this.fetchInfo = this.fetchInfo.bind(this);
    }

    fetchInfo(url) {
        fetch(url)
        .then(results => {
            return results.json();
        }).then (data => {
            this.setState({
                title: data.title,
                year: data.year,
                genres: data.genres,
                stories: data.stories,
                participants: data.participants,
                awards: data.awards,
                altTitles: data.altTitles,
            })
        })
        .catch(error => {
            console.log(error);
            return error.json();
        })
    }

    componentDidMount() {
        this.fetchInfo('http://localhost:8000/fullinfo/' + this.state.titleID);
    }


    render() {

        return (
            <div className="singleContainer">
                <div className="header">
                    <h1>Your selection, human. Please enjoy your bread and circuses!</h1>
                </div>
                <div className="infoContainer">
                    <Title 
                            title={this.state.title} 
                            year={this.state.year}
                    />
                    <Genres 
                        genres={this.state.genres}
                    />
                    <Story
                        stories={this.state.stories}
                    />
                    <Cast
                        participants={this.state.participants}
                    />
                    <Awards
                        awards={this.state.awards}
                    />
                    <AltTitles
                        altTitles={this.state.altTitles}
                    />
                </div>
                <div className="link">
                    <Link className="homeLink" to={`/`}>Home</Link>
                </div>
            </div>
        )
    }

}

export default SinglePage;