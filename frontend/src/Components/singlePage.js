import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Title from './title';







class SinglePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleID: this.props.match.params.id,
        }
    }

    componentDidMount() {
        $.get('http://localhost:8000/title/' + this.state.titleID, (titlesFromApi) => {
            this.setState({
                name: titlesFromApi.data[0].name,
                year: titlesFromApi.data[0].year,
            })
        })
    }


    render() {

        return (
            <div className="singleContainer">
                <div className="header">
                    <h1>Your selection, human. Please enjoy your bread and circuses!</h1>
                </div>
                <div className="container">
                    <Title 
                        name={this.state.name} 
                        year={this.state.year}
                        titleID = {this.state.titleID}
                    />
                </div>
                <Link className="homeLink" to={`/`}>Home</Link>
            </div>
        )
    }

}

export default SinglePage;