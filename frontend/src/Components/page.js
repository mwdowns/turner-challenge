import React from 'react';
import '../index.css';
import $ from 'jquery';
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
    }
    
    componentDidMount() {
        $.getJSON('http://localhost:8000/titles', (titlesFromApi) => {
            this.setState({
                titles: titlesFromApi.data,
            })
        })
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