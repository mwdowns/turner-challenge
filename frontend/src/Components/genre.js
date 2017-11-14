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
                <div>Genres:{genres}</div>
                {/* <ul>
                    {genres}
                </ul> */}
            </div>
        )
    }
    
}

export default Genres;