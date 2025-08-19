import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let{title, description} = this.props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://www.androidauthority.com/wp-content/uploads/2024/11/Apple-Mac-Mini-M4-with-accessories.jpg" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
