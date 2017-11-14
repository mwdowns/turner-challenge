import React from 'react';
// import $ from 'jquery';

class Title extends React.Component {
    
    render() {
        return (
            <div>{this.props.name} - {this.props.year}</div>
        )
    }
}

export default Title;