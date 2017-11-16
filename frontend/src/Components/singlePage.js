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
                <Title 
                        title={this.state.title} 
                        year={this.state.year}
                />
                <div className="container">
                    {/* <div className="genreContainner"> */}
                        <Genres 
                            genres={this.state.genres}
                        />
                    {/* </div>
                    <div className="storyContainner"> */}
                        <Story
                            stories={this.state.stories}
                        />
                    {/* </div>
                    <div className="castContainner"> */}
                        <Cast
                            participants={this.state.participants}
                        />
                    {/* </div>
                    <div className="awardsContainner"> */}
                        <Awards
                            awards={this.state.awards}
                        />
                    {/* </div>
                    <div className="altTitleContainner"> */}
                        <AltTitles
                            altTitles={this.state.altTitles}
                        />
                    {/* </div> */}
                </div>
                <Link className="homeLink" to={`/`}>Home</Link>
            </div>
        )
    }

}

export default SinglePage;