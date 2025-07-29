import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;
    return (
      <div className="m-3">
        
        <div className="card" style={{ width: "18rem" }}>
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{left: "90%"}}>{source}</span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">Author:- {author? author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
             {/* <p className="card-text"><small className="text-muted">By {source}</small></p> */}
             
            <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
            
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
