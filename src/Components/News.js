import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  static defaultProps = {
    country: 'us',
    category: "general",
    pageSize: 6
  }

  // static propTypes = {
  //   country: propTypes.string,
  //   pageSize: propTypes.number,
  //   category: propTypes.category
  // }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    console.log("Hi, I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page : 1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Newzy`;
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d92aee36fd64b19ae3d4b46d72a0fc7
      &page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  async componentDidMount(){
    this.updateNews();
  }

  handlePrevClick = async ()=>{
    console.log("Previous");
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  handleNextClick = async ()=>{
    console.log("Next");

    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d92aee36fd64b19ae3d4b46d72a0fc7
      //   &page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true});
      // let data = await fetch(url);
      // let parsedData = await data.json()
      // console.log(parsedData);
      // // this.setState({articles: parsedData.articles})
      
      // this.setState({
      //   page: this.state.page + 1,
      //   articles: parsedData.articles,
      //   loading: false
      // })
      this.setState({page: this.state.page + 1});
      this.updateNews();
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className="text-center">Newzy - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2> 
        {/* <h2>Newzy - Top Headlines</h2> */}
        {this.state.loading && <Spinner/>}

        {/* First Row */}
        <div className="row m-3">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-4 mb-3" key={element.url}>
              <NewsItem title={element.title} description={element.description} author={element.author} date={element.publishedAt} imageUrl={element.urlToImage} newsUrl={element.url}/> 
            </div>
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News