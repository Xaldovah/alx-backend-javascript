export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Setter for size
  set size(value) {
    this._size = value;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Setter for location
  set location(value) {
    this._location = value;
  }

  // Overrides the toPrimitive method
  [Symbol.toPrimitive](hol) {
    if (hol === 'number') {
      return this.size;
    }
    if (hol === 'string') {
      return this.location;
    }
    return this;
  }
}
