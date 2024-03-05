export default class OrderItem {

  private _id: string;
  private _productId: string;
  private _name: string;
  private _price: number;
  private _quantity: number;

  constructor(id: string, name: string, price: number, productId: string, quantity: number){
    this._id = id;
    this._name = name;
    this._price = price;
    this._productId = productId;
    this._quantity = quantity;
    this.validate();
  }

  validate(): boolean {
    if (this._quantity <= 0){
      throw Error("Item quantity must be greater than 0")
    }
    return true;
  }

  get quantity(): number{
    return this._quantity;
  }

  get price(): number{
    return this._price * this._quantity;
  }

  orderItemTotal(): number {
    return this._price * this._quantity;
  }

}