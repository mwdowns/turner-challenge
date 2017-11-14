import React from 'react';
import { Link } from 'react-router-dom';


class Results extends React.Component {

    render() {
        let name;
        if (this.props.result.length !== 0) {
            let result = this.props.result[0];
            if (typeof result === 'string') {
                name = result;
            } else {
                name = <Link className="resultLink" to={`/single/${result.id}`}>{result.name}</Link>;
            } 
        }
    
        
        return (
            <div className="result">{name}</div>
        )
    }
}

export default Results;