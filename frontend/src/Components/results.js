import React from 'react';
import { Link } from 'react-router-dom';


class Results extends React.Component {

    render() {
        let name;
        if (this.props.result.length !== 0) {
            name = <Link to={`/single/${this.props.result[0].id}`}>{this.props.result[0].name}</Link>;
        }
    
        
        return (
            <div>{name}</div>
        )
    }
}

export default Results;