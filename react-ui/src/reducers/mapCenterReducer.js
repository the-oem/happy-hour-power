const mapCenterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CENTER':
      return action.position;
    default:
      return state;
  }
}

export default mapCenterReducer
