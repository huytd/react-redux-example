import React from 'react';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <button onClick={this.props.onAllClick}>All</button>
        <button onClick={this.props.onTrendingClick}>Trending</button>
        <button onClick={this.props.onLatestClick}>Latest</button>
        <br/>
        { this.props.news.map(item => (
              <div className="news-item">
                {item.content}
              </div>
          )) }
      </div>
    )
  }
}

export default List;
