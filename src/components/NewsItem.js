import React, { Component } from 'react'
import classNames from 'classnames';

const cardTitle = 'card-title';

export class NewsItem extends Component {
  render() {
    let {title, description, imageURL, newsURL} = this.props;
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
            <img src={imageURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className={classNames(cardTitle)}>{title?title:''}</h5>
                <p className="card-text">{description?description.slice(0,60):''}</p>
                <a href={newsURL} className="btn btn-primary">more...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
