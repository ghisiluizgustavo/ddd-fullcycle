import Customer from "./customer";

export default class Address {

  _street: string;
  _city: string;
  _number: number = 0;
  _zip: string;

  constructor(street: string, city: string, number: number, zip: string){
    this._street = street;
    this._city = city;
    this._number = number;
    this._zip = zip
  }

  validate(){
    // do something
  }

  toString(){
    return `${this._street}, ${this._number}, ${this._zip}, ${this._city}`;
  }

}
