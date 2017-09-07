export const specifyLocation = (location, id) => {
  return {
    type: SPECIFY_LOCATION,
    location,
    id
  }
}

export const chooseEstablishment = (establishment, id) => {
  return {
    type: CHOOSE_ESTABLISHMENT,
    establishment,
    id
  }
}

export const viewDetails = (details) => {
  return {
    type: VIEW_DETAILS,
    details
  }
}
