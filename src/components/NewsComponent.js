import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Spinner } from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      isLastPage: false,
      hasMore: true,
    };
    document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} `;
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }

  static defaultProps = {
    country: "us",
    category: "general",
    pageSize: 20,
  }

  fetchNews = async (page) => {
    try {
      this.props.setProgress(10); // Set progress to 0% before fetching
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0577c355d7b249d9b72151f50ec713bc&page=${page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      // Optional: artificial delay for better UX
      await new Promise(resolve => setTimeout(resolve, 700)); // 700ms

      if (parsedData.status === "ok") {
        const totalPages = Math.ceil(parsedData.totalResults / this.props.pageSize);
        const isLastPage = page >= totalPages;

        this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          loading: false,
          page: page,
          totalResults: parsedData.totalResults,
          isLastPage: isLastPage,
          hasMore: !isLastPage,
        });

      } else {
        console.error("API error:", parsedData);
        this.setState({ loading: false });
      }
      this.props.setProgress(100); // Set progress to 100% after fetching
    } catch (error) {
      console.error("Fetch failed:", error);
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.fetchNews(this.state.page);
  }

 

  fetchMoreData = async () => {
    if (this.state.loading || this.state.isLastPage) return;
    await this.fetchNews(this.state.page + 1);
  };


  render() {
    const { articles } = this.state;

    return (
      <>
        <h1 className="text-center">{document.title} - Top Headlines</h1>
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={ <Spinner/>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container">
            <div className="row m-3">
              {articles.map((element,index) => (
                <div className="col-md-4" key={element.url+index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description.slice(0, 80) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt = {element.publishedAt}
                    source = {element.source.name}
                  />
                </div>
                
              ))}
              
            </div>
          </div>
        </InfiniteScroll>
        
        

        
        
      </>
    );
  }
}

export default NewsComponent;
