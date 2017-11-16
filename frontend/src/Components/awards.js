import React from 'react';

class Awards extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            awards: [],
            clicked: false,
        })
        this.showInfo = this.showInfo.bind(this);
    }

    showInfo(data, awards) {
        if (this.state.clicked === true) {
            this.setState({
                clicked: false,
                awards: [],
            })
        } else {
            let awards = data.filter(function(award) {
                return award.won === true
            }).map(function(award, index) {
                return (
                    <div className="awardDetails" key={index}>{award.award} - {award.year}</div>
                ) 
            });
            this.setState({
                awards: awards,
                clicked: true,
            });
        }
    }

    render() {
        
        return (
            <div className="awardsContainer">
                <div className="awards"><button onClick={() => this.showInfo(this.props.awards, this.state.awards)}>Awards</button></div>
                {this.state.awards}
            </div>
        )
    }

}

export default Awards;