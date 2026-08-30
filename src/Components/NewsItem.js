import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let{title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div>
        {/* <div className="card" style={{width: "18rem"}}> */}
        <div className="card">
            <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
