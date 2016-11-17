import { connect } from 'react-redux';
import List from '../components/List';

const getFilteredNews = (news, filter) => {
  switch (filter) {
    case 'all':
      return news
    case 'trending':
      return news.filter(n => n.type == 'trending')
    case 'latest':
      return news.filter(n => n.type == 'latest')
  }
}

const mapStateToProps = (state) => {
  return {
    news: getFilteredNews(state.news, state.currentFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAllClick: () => {
      dispatch({
        type: 'SET_FILTER',
        filter: 'all'
      });
    },
    onTrendingClick: () => {
      dispatch({
        type: 'SET_FILTER',
        filter: 'trending'
      });
    },
    onLatestClick: () => {
      dispatch({
        type: 'SET_FILTER',
        filter: 'latest'
      });
    },
  }
}

const FilteredList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default FilteredList;
