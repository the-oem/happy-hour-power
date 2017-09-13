export default class Marker {
  constructor(position, place_id, inTable = false, defaultAnimation = 2) {
    this.position = position;
    this.defaultAnimation = defaultAnimation;
    this.key = place_id;
    if (inTable) {
      this.icon = {
        path: 0,
        strokeColor: 'blue',
        scale: 5,
      }
    }
  }
}
