import React from 'react';
import $ from 'jquery';
import AltTitles from './altTitles';

class Awards extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            altTitles: [],
        })
    }

    componentDidMount() {
        $.get('http://localhost:8000/alt_titles/' + this.props.titleID, (altTitlesFromApi) => {
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

        let awards = this.props.awards;
        awards = awards.filter(function(award) {
            return award.won === true;
        })
        let display = awards.map(function(award, index) {
            return (
                <div key={index}>{award.award} - {award.year}</div>
            ) 
        });
        
        return (
            <div>
                <div className="awardsContainer">
                    <div className="awards">Awards:</div>
                    <div className="awardDetails">{display}</div>
                </div>
                <AltTitles altTitles={this.state.altTitles} />
            </div>
        )
    }
    
}

export default Awards;