import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class ListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: [],
        }
    }

    componentDidMount() {
        $.getJSON('http://localhost:8000/titles', (titlesFromApi) => {
            this.setState({
                titles: titlesFromApi.data,
            })
        })
    }

    render() {

        const titlesArr = this.state.titles.map(function(title) {
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