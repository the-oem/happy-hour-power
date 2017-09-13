const handleMarkerClick = (mapObj) => {
  const { lat, lng } = mapObj.latLng;
  
  return {
    type: 'HANDLE_MARKER_CLICK',
    position: {
      lat: lat(),
      lng: lng(),
    }
  }
}
