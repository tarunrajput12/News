import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'> 
        <h2>Newzy - Top Headlines</h2>
        {/* First Row */}
        <div className="row">
          <div className="col-4">
            <NewsItem title="News" description="This is first container"/> 
          </div>
          <div className="col-4">
            <NewsItem title="News" description="This is first container"/> 
          </div>
          <div className="col-4">
            <NewsItem title="News" description="This is first container"/> 
          </div>
        </div>

        {/* Second Row */}
        <div className="row mt-3">
          <div className="col-4">
            <NewsItem title="News" description="This is first container"/> 
          </div>
          <div className="col-4">
            <NewsItem title="News" description="This is first container"/> 
          </div>
          <div className="col-4">
            <NewsItem title="News" description="This is first container"/> 
          </div>
        </div>
      </div>
    )
  }
}

export default News