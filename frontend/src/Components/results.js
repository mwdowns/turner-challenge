import React from 'react';
import { Link } from 'react-router-dom';

class Results extends React.Component {

    render() {
        let name;
        console.log(this.props.results);
        if (this.props.results.length !== 0) {
            let results = this.props.results[0];
            if (typeof results === 'string') {
                name = results;
            } else {
                name = <Link className="resultLink" to={`/single/${results.id}`}>{results.name}</Link>;
            } 
        }
    
        
        return (
            <div className="result">{name}</div>
        )
    }
}

export default Results;