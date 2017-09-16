export default class Marker {
  constructor(position, id, title, inTable = false, defaultAnimation = 2) {
    this.position = position;
    this.defaultAnimation = defaultAnimation;
    this.key = id;
    this.title = title;
    if (inTable) {
      this.icon = {
        url: 'assets/beer-icon.png',
        scaledSize: new window.google.maps.Size(30, 30)
      }
    }
  }
}
