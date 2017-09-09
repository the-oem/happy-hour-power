const mapReducer = (state=[], action) => {
  switch(action.type){
    case 'SPECIFY_LOCATION':

    return [...action.location]
    
  default:
  return state
  }
}

export default mapReducer;
