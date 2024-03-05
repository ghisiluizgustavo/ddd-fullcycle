import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

// ID
let customer = new Customer("123", "Luiz");
const address = new Address("Rua 123", "Criciuma", 123, "88818274")
customer.Address = address;
customer.activate();


// OBJETO 
const item1 = new OrderItem("1", "item 1", 10);
const item2 = new OrderItem("2", "item 2", 15);
const order = new Order("1", "123", [item1, item2])