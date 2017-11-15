import React from 'react';
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
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(url) {
        fetch(url)
        .then(results => {
            return results.json();
        }).then (data => {
            let participants = [];
            data.data.map(function(castmember) {
                participants.push(castmember.name);
                return castmember;
            })
            this.setState({
                participants: participants,
            })
        })
    }

    componentDidMount() {
        this.fetchData('http://localhost:8000/participants/' + this.props.titleID);
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