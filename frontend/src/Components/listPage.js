import React from 'react';
// import $ from 'jquery';
import { Link } from 'react-router-dom';
// import Search from './search';

class ListPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         searchText: '',
    //         searchResults: [],
    //     }
    // }

    // handleChange(value) {
    //     console.log('heyo');
    // }

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