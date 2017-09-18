export default class Location {
  constructor(google_maps_location) {
    this.google_maps_location = google_maps_location;
    this.name = google_maps_location.name;
    this.address = google_maps_location.vicinity;
    this.rating = google_maps_location.rating;
    this.google_maps_id = google_maps_location.id;
  }
}
