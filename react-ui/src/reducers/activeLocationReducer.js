const activeLocationReducer = (state={}, action) => {
  switch (action.type) {
    case 'HANDLE_MARKER_CLICK':
      return action.marker;

    case 'UPDATE_DETAIL':
      return Object.assign({}, state, { happyhours: action.happyhours });
      
    default:
      return state;
  }
}

export default activeLocationReducer;
