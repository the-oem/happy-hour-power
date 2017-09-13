export default class Marker {
  constructor(position, id, title, inTable = false, defaultAnimation = 2) {
    this.position = position;
    this.defaultAnimation = defaultAnimation;
    this.key = id;
    this.title = title;
    if (inTable) {
      this.icon = {
        path: 0,
        strokeColor: 'blue',
        scale: 5,
      }
    }
  }
}
