const activeLocationReducer = (state={}, action) => {
  switch (action.type) {
    case 'HANDLE_MARKER_CLICK':
      return action.marker;
    default:
      return state;
  }
}

export default activeLocationReducer;
