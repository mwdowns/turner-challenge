import React from 'react';
import { Link } from 'react-router-dom';

class ListPage extends React.Component {


    render() {

        let titlesArr = this.props.titles.map(function(title) {
            if (title.url === undefined) {
                return (
                    <div className="movieLinkList" key={title.id}>
                    <Link className="movieLink" to={`/single/${title.id}`}>{title.name} - {title.year}</Link>
                </div>
                )
            } else {
                return (
                    <div className="movieLinkList" key={title.id}>
                        <img src={title.url} alt="movie poster"/>
                        <Link className="movieLink" to={`/single/${title.id}`}>{title.name} - {title.year}</Link>
                    </div>
                )
            }  
        })

        return (
            <div className="listContainer">
                <div className="header">
                    <h1>Behold, human. Your complete list of enterainment options!</h1>
                </div>
                <div className="movieList">
                        {titlesArr}
                </div>
                <Link className="homeLink" to={`/`}>Take me Home</Link>
            </div>
        )
    }


}

export default ListPage;