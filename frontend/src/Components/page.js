import React from 'react';
import '../index.css';
// import $ from 'jquery';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Search from './search';
import ListPage from  './listPage';
import SinglePage from './singlePage';

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: [],
        }
        this.fetchInfo = this.fetchInfo.bind(this);
    }

    fetchInfo(url) {
        fetch(url)
        .then(results => {
            return results.json();
        })
        .then(data => {
            let imdbURL = "http://www.omdbapi.com/";
            let api_key = "c38dd8d9";
    
            let poster = (search) => {
                let url = new URL(imdbURL);
                let params = {apikey: api_key, t: search}
                Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
                fetch(url)
                .then(results => {
                    return results.json();
                })
                .then(data => {
                    return data.Poster;
                })
                .catch(error => {
                    console.log('error? ', error);
                    return error;
                });
            }
            data = data.data.map(function(title) {
                title.url = poster(title.name)
                return title
            })
            this.setState({
                titles: data,
            })
        })
    }
    
    componentDidMount() {
        this.fetchInfo('http://localhost:8000/titles');
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" render={(props) => ( <Search titles={this.state.titles}/> )} />
                        <Route path="/fullList" render={(props) => ( <ListPage titles={this.state.titles}/> )} />
                        <Route path="/single/:id" component={SinglePage} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Page;