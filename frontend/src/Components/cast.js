import React from 'react';
import $ from 'jquery';
import Awards from './awards';

class Cast extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = ({
            awards: [],
        })
    }

    componentDidMount() {
        $.get('http://localhost:8000/awards/' + this.props.titleID, (awardsFromApi) => {
            let awards = [];
            awardsFromApi.data.map(function(x) {
                awards.push({award: x.award, year: x.year, won: x.won});
                return x;
            })
            this.setState({
                awards: awards,
            })
        })
    }

    render() {
        let participants = this.props.participants.slice(0, 4);
        let castAndCrew = participants.map(function(person, index) {
            return (
                <div className="names" key={index}>{person}</div>
            ) 
        });

        return (
            <div>
                <div className="castContainer">
                    <div className="cast">Cast and Crew:</div>
                    {castAndCrew}
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