import React from 'react';
// import $ from 'jquery';

class Title extends React.Component {
    
    render() {
        return (
            <div>
                <div className="title">{this.props.name}</div>
                <div className="year">{this.props.year}</div>
            </div>
        )
    }
}

export default Title;