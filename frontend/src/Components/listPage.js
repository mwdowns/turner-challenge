import React from 'react';
import $ from 'jquery';
// import { Link } from 'react-router-dom';

class ListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: [],
            titleID: 0,
        }
    }

    componentDidMount() {
        $.getJSON('http://localhost:8000/titles', (titlesFromApi) => {
            this.setState({
                titles: titlesFromApi.data,
                titleID: 0,
            })
        })
    }

    goToTitle(id) {
        console.log('i wanna go here: ' + id);
    }

    render() {

        let id;

        const titlesArr = this.state.titles.map(function(title) {
            return (
                <li key={title.id} onClick={() => {id = title.id;}}>
                    {title.name} - {title.year}
                </li>
            )
        });

        return (
            <div className="movieList">
                <ul>
                    <span onClick={() => this.goToTitle(id)}>{titlesArr}</span>
                </ul>
            </div>
        )
    }


}

export default ListPage;