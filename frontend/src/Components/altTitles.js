import React from 'react';
// import $ from 'jquery';

class AltTitles extends React.Component {

    render() {
        let altTitles = this.props.altTitles.filter(function(alt) {
            return alt.language != 'ENGLISH'
        });
        altTitles = altTitles.map(function(alt, index) {
            return (
                <div key={index}>{alt.alt_title} - {alt.language}</div>
            )
        })
        return (
            <div className="altTitleContainer">
                <div className="altTitle">Alternate Titles:</div>
                <div className="altTitleDetails">{altTitles}</div>
            </div>
        )
    }
}


export default AltTitles;