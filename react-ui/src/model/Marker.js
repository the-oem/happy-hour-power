export default class Marker {
  constructor(position, id, title, inTable = false, defaultAnimation = 2) {
    this.position = position;
    this.defaultAnimation = defaultAnimation;
    this.key = id;
    this.title = title;
    if (inTable) {
      this.icon = {
        url: 'assets/beer-icon.png',
        // size: new window.google.maps.Size(512, 512),
        scaledSize: new window.google.maps.Size(30, 30)
        // anchor: new window.google.maps.Point(0,0),
        // origin: new window.google.maps.Point(0,0),
      }
      // {
      //     // url: 'https://icons.iconarchive.com/icons/flat-icons.com/flat/512/Beer-icon.png',
      //     url: 'assets/my-location.png',
      //     // This marker is 20 pixels wide by 32 pixels high.
      //     size: new window.google.maps.Size(20, 20),
      //     // The origin for this image is (0, 0).
      //     origin: new window.google.maps.Point(0, 0),
      //     // The anchor for this image is the base of the flagpole at (0, 32).
      //     anchor: new window.google.maps.Point(0, 32)
      //   };
    }
  }
}
