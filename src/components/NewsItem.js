import React, { Component } from 'react'
import classNames from 'classnames';

const cardTitle = 'card-title';

export class NewsItem extends Component {
  render() {
    let {title, description, imageURL, newsURL, author, publishDate} = this.props;
    return (
      <div>
        <div className="card" style={{padding: '10px'}}>
            <img src={imageURL} className="card-img-top" alt="..." style={{maxHeight: '190px'}}/>
            <div className="card-body">
                <h5 className={classNames(cardTitle)}>{title?title:''}</h5>
                <p className="card-text">{description?description.slice(0,60):''}</p>
                <p class="card-text"><small class="text-muted">By {author} on {new Date(publishDate).toGMTString()}</small></p>
                <a href={newsURL} className="btn btn-primary">more...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
