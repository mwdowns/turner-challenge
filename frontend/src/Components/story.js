import React from 'react';
import $ from 'jquery';
import Cast from './cast';

class Story extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            participants: [],
        })
    }

    componentDidMount() {
        $.get('http://localhost:8000/participants/' + this.props.titleID, (participantsFromApi) => {
            let participants = [];
            participantsFromApi.data.map(function(x) {
                participants.push(x.name);
                return x;
            })
            this.setState({
                participants: participants,
            })
        })
    }

    render() {
        let stories = this.props.stories.map(function(story) {
            return (
                <div key={story.source}>{story.description}</div>
            )
        })

        return (
            <div>
                <div className="storyContainer">
                    <div className="story">Story:</div>
                    <div className="description">{stories[0]}</div>
                </div>
                <Cast 
                    participants={this.state.participants}
                    titleID={this.props.titleID}
                />
            </div>
        )
    }
    
}

export default Story;