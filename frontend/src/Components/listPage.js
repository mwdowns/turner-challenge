import React from 'react';
// import $ from 'jquery';
import { Link } from 'react-router-dom';

class ListPage extends React.Component {

    render() {

        const titlesArr = this.props.titles.map(function(title) {
            return (
                <li key={title.id}>
                    <Link to={`/single/${title.id}`}>{title.name} - {title.year}</Link>
                </li>
            )
        });

        return (
            <div className="movieList">
                <ul>
                    {titlesArr}
                </ul>
            </div>
        )
    }


}

export default ListPage;