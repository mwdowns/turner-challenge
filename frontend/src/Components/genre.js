import React from 'react';
// import $ from 'jquery';

class Genres extends React.Component {

    render() {
        let genres = this.props.genres;
        // let genres = this.props.genres.map(function(genre) {
        //     return (
        //         <li key={genre}>{genre}</li>
        //     )
        // })
        return (
            <div>
                <div className="container">
                    <div className="genres">Genres:</div>
                    <div className="genreResults">
                        <div>{genres}</div>
                        <div>this should be split up, but I'm having trouble with the state object</div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Genres;