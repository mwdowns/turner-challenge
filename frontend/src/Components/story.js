import React from 'react';
import $ from 'jquery';
import Cast from './cast';

class Story extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            participants: [],
            stories: [],
            clicked: false,
        })
        this.showInfo = this.showInfo.bind(this);
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

    showInfo(data, stories) {
        if (this.state.clicked === true) {
            this.setState({
                clicked: false,
                stories: [],
            })
        } else {
            data.map(function(story) {
                stories.push(
                    <div className="description" key={story.source}>{story.description}</div>
                )
                return story;
            })
            this.setState({
                stories: stories[0],
                clicked: true,
            });
        }
    }

    render() {
        let stories = [];

        return (
            <div>
                <div className="storyContainer">
                    <div className="story"><button onClick={() => this.showInfo(this.props.stories, stories)}>Story</button></div>
                    {this.state.stories}
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