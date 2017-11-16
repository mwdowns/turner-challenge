import React from 'react';

class Story extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            stories: [],
            clicked: false,
        })
        this.showInfo = this.showInfo.bind(this);
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
                    <div className="description" key={story.source}>
                        <div>{story.source}</div>
                        <div>{story.description}</div>
                    </div>
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
            <div className="storyContainer">
                <div className="story"><button onClick={() => this.showInfo(this.props.stories, stories)}>Story</button></div>
                {this.state.stories}
            </div>
        )
    }
}

export default Story;