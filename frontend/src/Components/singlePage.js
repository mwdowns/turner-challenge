import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Title from './title';
import Genres from './genre';
import Story from './story';
import Cast from './cast';
import Awards from './awards';
import AltTitles from './altTitles';


class SinglePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleID: this.props.match.params.id,
        }
    }

    componentDidMount() {
        $.get('http://localhost:8000/title/' + this.state.titleID, (titlesFromApi) => {
            this.setState({
                name: titlesFromApi.data[0].name,
                year: titlesFromApi.data[0].year,
            })
        })
        $.get('http://localhost:8000/genre/' + this.state.titleID, (genresFromApi) => {
            let genres = [];
            genresFromApi.data.map(function(x) {
                genres.push(x.genre);
                return x;
            })
            this.setState({
                genres: genres,
            })
        })
        $.get('http://localhost:8000/storyline/' + this.state.titleID, (storiesFromApi) => {
            let stories = [];
            storiesFromApi.data.map(function(x) {
                stories.push({source: x.source, description: x.description});
                return x;
            })
            this.setState({
                stories: stories,
            })
        })
        $.get('http://localhost:8000/participants/' + this.state.titleID, (participantsFromApi) => {
            let participants = [];
            participantsFromApi.data.map(function(x) {
                participants.push(x.name);
                return x;
            })
            this.setState({
                participants: participants,
            })
        })
        $.get('http://localhost:8000/awards/' + this.state.titleID, (awardsFromApi) => {
            let awards = [];
            awardsFromApi.data.map(function(x) {
                awards.push({award: x.award, year: x.year, won: x.won});
                return x;
            })
            this.setState({
                awards: awards,
            })
        })
        $.get('http://localhost:8000/alt_titles/' + this.state.titleID, (altTitlesFromApi) => {
            let altTitles = [];
            altTitlesFromApi.data.map(function(x) {
                altTitles.push({alt_title: x.alt_title, language: x.language});
                return x;
            })
            this.setState({
                altTitles: altTitles,
            })
        })

    }


    render() {
        // console.log(this.state.altTitles);
        return (
            <div>
                <div>something</div>
                <Link to={`/`}>Go back to list</Link>
                <Title name={this.state.name} year={this.state.year} />
                <Genres genres={this.state.genres} />
                <Story stories={this.state.stories} />
                <Cast participants={this.state.participants} />
                <Awards awards={this.state.awards} />
                <AltTitles altTitles={this.state.altTitles} />
            </div>
        )
    }

}

export default SinglePage;