import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateNumber(amount, 'Amount');
    this._currency = this.validateCurrency(currency, 'Currency');
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(newAmount) {
    this._amount = this.validateNumber(newAmount, 'Amount');
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(newCurrency) {
    this._currency = this.validateCurrency(newCurrency, 'Currency');
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // Helper function to validate number type
  validateNumber(value, attribute) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  // Helper function to validate currency type
  validateCurrency(value, attribute) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attribute} must be an instance of Currency`);
    }
    return value;
  }
}
