import React from 'react';

class Cast extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = ({
            participants: [],
            clicked: false,
        })
        this.showInfo = this.showInfo.bind(this);
    }

    showInfo(data, participants) {
        if (this.state.clicked === true) {
            this.setState({
                clicked: false,
                participants: [],
            })
        } else {
            let castAndCrew = data.slice(0, 4).map(function(person, index) {
                return (
                    <div className="names" key={index}>{person.name}</div>
                )
            })
            this.setState({
                participants: castAndCrew,
                clicked: true,
            });
        }
    }

    render() {

        return (
            <div className="castContainer">
                <div className="cast"><button onClick={() => this.showInfo(this.props.participants, this.state.particiapants)}>Cast and Crew</button></div>
                {this.state.participants}
            </div>
        )
    }
    
}

export default Cast;