import React from 'react';

class Title extends React.Component {
    
    render() {
        return (
            <div className="titleYear">
                <div className="title">{this.props.title}</div>
                <div className="year">{this.props.year}</div>
            </div>
        )
    }
}

export default Title;