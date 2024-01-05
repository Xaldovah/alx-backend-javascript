export default class Currency {
  constructor(code, name) {
    this._code = this.validateString(code, 'Code');
    this._name = this.validateString(name, 'Name');
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(newCode) {
    this._code = this.validateString(newCode, 'Code');
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = this.validateString(newName, 'Name');
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Helper function to validate string type
  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }
}
