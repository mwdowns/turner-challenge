import React from 'react';
import AltTitles from './altTitles';

class Awards extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            altTitles: [],
            awards: [],
            clicked: false,
        })
        this.fetchData = this.fetchData.bind(this);
        this.showInfo = this.showInfo.bind(this);
    }

    fetchData(url) {
        fetch(url)
        .then(results => {
            return results.json();
        }).then (data => {
            let altTitles = [];
            data.data.map(function(title) {
                altTitles.push({alt_title: title.alt_title, language: title.language});
                return title;
            })
            this.setState({
                altTitles: altTitles,
            })
        })
    }

    componentDidMount() {
        this.fetchData('http://localhost:8000/alt_titles/' + this.props.titleID);
    }

    showInfo(data, awards) {
        if (this.state.clicked === true) {
            this.setState({
                clicked: false,
                awards: [],
            })
        } else {
            let awards = data;
            awards = awards.filter(function(award) {
                return award.won === true;
            })
            let display = awards.map(function(award, index) {
                return (
                    <div className="awardDetails" key={index}>{award.award} - {award.year}</div>
                ) 
            });
            this.setState({
                awards: display,
                clicked: true,
            });
        }
    }

    render() {
        
        return (
            <div>
                <div className="awardsContainer">
                    <div className="awards"><button onClick={() => this.showInfo(this.props.awards, this.state.awards)}>Awards</button></div>
                    {this.state.awards}
                </div>
                <AltTitles altTitles={this.state.altTitles} />
            </div>
        )
    }
    
}

export default Awards;