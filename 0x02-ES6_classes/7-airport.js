export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    this._name = value;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // setter for code
  set code(value) {
    this._code = value;
  }

  // Overrides toString method
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
