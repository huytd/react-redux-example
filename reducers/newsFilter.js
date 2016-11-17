const defaultNewsData = {
  currentFilter: 'all',
  news: [
    {
      id: 1,
      content: 'blah blah blah blah',
      type: 'trending'
    },
    {
      id: 2,
      content: 'tren blah blah blah blah',
      type: 'trending'
    },
    {
      id: 3,
      content: 'blah blah',
      type: 'latest'
    },
    {
      id: 4,
      content: 'blah hohoisd fi',
      type: 'trending'
    },
    {
      id: 5,
      content: 'blah',
      type: 'latest'
    },
  ]
}


const newsFilter = (state = defaultNewsData, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        news: state.news,
        currentFilter: action.filter
      }
    case 'CLEAR_FILTER':
      return {
        news: state.news,
        currentFilter: 'all'
      }
    default:
      return state
  }
}

export default newsFilter
