export default class Location {
  constructor(location, website_url='', phone_number=1, location_type_id=2) {
    this.name = location.name;
    this.latitude = location.geometry.location.lat();
    this.longitude = location.geometry.location.lng();
    this.google_maps_id = location.id;
    this.phone_number = phone_number;
    this.website_url = website_url;
    this.location_type_id = location_type_id;
  }
}
