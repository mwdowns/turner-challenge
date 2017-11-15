import React from 'react';
// import $ from 'jquery';

class AltTitles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            altTitles: [],
            clicked: false,
        }
    }

    showInfo(data, altTitles) {
        if (this.state.clicked === true) {
            this.setState({
                clicked: false,
                altTitles: [],
            })
        } else {
            let altTitles = data.filter(function(alt) {
                return alt.language !== 'ENGLISH'
            });
            altTitles = altTitles.map(function(alt, index) {
                return (
                    <div className="altTitleDetails" key={index}>{alt.alt_title} - {alt.language}</div>
                )
            })
            if (altTitles.length < 1) {
                altTitles = <div className="altTitleDetails" key={0}>No Alternate Titles</div>
            }
            this.setState({
                altTitles: altTitles,
                clicked: true,
            });
        }
    }

    render() {
        return (
            <div className="altTitleContainer">
                <div className="altTitle"><button onClick={() => this.showInfo(this.props.altTitles, this.state.altTitles)}>Alternate Titles</button></div>
                {this.state.altTitles}
            </div>
        )
    }
}


export default AltTitles;