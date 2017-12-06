import React from 'react';
import { Link } from 'react-router-dom';

class Results extends React.Component {

    render() {
        let name;
        if (this.props.results.length === 1) {
            let results = this.props.results[0];
            if (typeof results === 'string') {
                name = results;
            } else {
                name = <Link className="resultLink" to={`/single/${results.id}`}>{results.name}</Link>;
            } 
        } else {
            name = this.props.results.map(function(title) {
                return (
                    <Link className="resultLink" to={`/single/${title.id}`} key={title.id}><div key={title.id}>{title.name}</div></Link>
                )
            })
        }
    
        
        return (
            <div className="result">{name}</div>
        )
    }
}

export default Results;