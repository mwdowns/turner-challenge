import React from 'react';
import '../index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ListPage from  './listPage';

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleID: 0,
        }
    }

    render() {
        return (
            <Router>
                <div className="main-page">
                    <Route exact path="/" component={ListPage} />
                </div>
            </Router>
        );
    }

}

export default Page;