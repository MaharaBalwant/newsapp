import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import { NotFound } from './404';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SpinnerLoader from './spinner';

export class News extends Component {
  

  constructor() {
    super();
    this.state = {
        loading: false,
        page: 1,
        articles: [],
        totalResults: 0
    };
  }

  async componentDidMount() {
    this.setState({loading:true});
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5291a290b7e64ed993555a9f3d053195&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let articlesData;
    if(data.status === 200){
        let parseData = await data.json();
        articlesData = parseData.articles;

        this.setState({
            articles: articlesData,
            totalResults: parseData.totalResults,
            loading: false
        });

    } else {
        articlesData = [];
    }
  }

  handlePreviewClick = ()=>{
    /* this.setState({
        page: this.state.page - 1
    }) */

    this.setState({loading:true});
    this.state.page = this.state.page - 1;
    this.componentDidMount();
  }

  handleNextClick = ()=>{
    /* this.setState({
        page: this.state.page + 1
    }) */

    this.setState({loading:true});
    this.state.page = this.state.page + 1;
    this.componentDidMount();
  }

  render() {
    return (
      <>
        <div className="container my-2">
            <div clss="heading my-1">
              <h4 class="text-center">NewsMonkey - Todays top headlines</h4>
            </div>
            {this.state.loading && <SpinnerLoader/>}
            <div className='row'>
                {!this.state.loading && this.state.articles.map (
                        (element) => {
                            return <div className='col-md-4 my-2' key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url}/>
                            </div>
                        }
                    )
                } 
            </div>
            <Row className="my-2">
                <Col><button disabled={this.state.page<=1} onClick={this.handlePreviewClick}>&laquo; Previous</button></Col>
                <Col xs={8}></Col>
                <Col><button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/10)} onClick={this.handleNextClick}>Next &raquo;</button></Col>
            </Row>
        </div>

      </>
    )
  }
}

export default News
