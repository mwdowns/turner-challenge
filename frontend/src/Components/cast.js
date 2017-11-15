import React from 'react';
import Awards from './awards';

class Cast extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = ({
            awards: [],
            participants: [],
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
            let awards = [];
            data.data.map(function(award) {
                awards.push({award: award.award, year: award.year, won: award.won});
                return award;
            })
            this.setState({
                awards: awards,
            })
        })
    }

    componentDidMount() {
        this.fetchData('http://localhost:8000/awards/' + this.props.titleID);
    }

    showInfo(data, participants) {
        if (this.state.clicked === true) {
            this.setState({
                clicked: false,
                participants: [],
            })
        } else {
            data = data.slice(0, 4);
            let castAndCrew = data.map(function(person, index) {
                return (
                    <div className="names" key={index}>{person}</div>
                )
            })
            this.setState({
                participants: castAndCrew,
                clicked: true,
            });
        }
    }

    render() {

        return (
            <div>
                <div className="castContainer">
                    <div className="cast"><button onClick={() => this.showInfo(this.props.participants, this.state.particiapants)}>Cast and Crew</button></div>
                    {this.state.participants}
                </div>
                <Awards 
                    awards={this.state.awards}
                    titleID={this.props.titleID}
                />
            </div>
        )
    }
    
}

export default Cast;