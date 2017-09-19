const activeLocationReducer = (state={}, action) => {
  switch (action.type) {
    case 'UPDATE_DETAIL':
      return Object.assign({}, action.location, { happyhours: action.happyhours})
    default:
      return state;
  }
}

export default activeLocationReducer;
