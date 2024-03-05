import Order from "./order"
import OrderItem from "./order_item"

describe("Order unit tests", () => {

  it("it should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", [])
    }).toThrow("Id is required")
  })

  it("it should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", [])
    }).toThrow("CustomerId is required")
  })

  it("it should throw error when itens are empty", () => {
    expect(() => {
      let order = new Order("123", "123", [])
    }).toThrow("Item qtd must be greater than 0");
  })

  it("should calculate total", () => {
    const item1 = new OrderItem("i1", "Item 1", 100, "p1", 2)
    const order = new Order("o1", "123", [item1])

    let total = order.total();

    expect(total).toBe(200);

    const item2 = new OrderItem("i2", "Item 2", 200, "p2", 2)
    const order2 = new Order("o2", "123", [item1, item2]);

    total = order2.total();

    expect(total).toBe(600);
  })


  it("should thrown error if item qte is less or equal than zero", () => {
    expect(() => {
      const item1 = new OrderItem("i1", "Item 1", 100, "p1", 0)
      const order = new Order("o1", "123", [item1])
    }).toThrow("Item quantity must be greater than 0")
  })
})