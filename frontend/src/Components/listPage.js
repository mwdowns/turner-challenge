import React from 'react';
// import $ from 'jquery';
import { Link } from 'react-router-dom';
// import Search from './search';

class ListPage extends React.Component {

    render() {

        const titlesArr = this.props.titles.map(function(title) {
            return (
                <div className="movieLinkList" key={title.id}>
                    <Link className="movieLink" to={`/single/${title.id}`}>{title.name} - {title.year}</Link>
                </div>
            )
        });

        return (
            <div className="listContainer">
                <div className="header">
                    <h1>Behold, human. Your complete list of enterainment options!</h1>
                </div>
                <div className="movieList">
                    {/* <ul> */}
                        {titlesArr}
                    {/* </ul> */}
                </div>
                <Link className="homeLink" to={`/`}>Take me Home</Link>
            </div>
        )
    }


}

export default ListPage;