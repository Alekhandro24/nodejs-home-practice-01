const productsOperations = require("./products");

// 1. отримуємо всі продукти - productsOperations.getAll
// 2. Oтримуємо 1 - това по id - productsOperations.getById
// 3. Добавити товар - productsOperations.add
// 4. Обновити товар по id - productsOperations.updateById
// 5. Видалити товар по id - productsOperations.removeById

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const products = await productsOperations.getAll();
      console.log(products);
      break;
    case "getById":
      const product = await productsOperations.getById(id);
      if (!product) {
        throw new Error(`Product with id=${id} not found!`);
      }
      console.log(product);
      break;
    case "add":
      const newProduct = await productsOperations.add(data);
      console.log(newProduct);
    case "updateById":
      const updateProduct = await productsOperations.updateById(id, data);
      if (!updateProduct) {
        throw new Error(`Product with id=${id} not found!`);
      }
      console.log(updateProduct);
      break;
    case "removeById":
      const removeProduct = await productsOperations.removeById(id);
      console.log(removeProduct);
      break;
    default:
      console.log("Unknown action");
  }
};

// 1.
// invokeAction({ action: "getAll" });

// 2.
// const id = "767580d5-f509-4f45-98f9-28e74ec4af66";
// invokeAction({ action: "getById", id });

// 3.
// const newData = {
//   name: "Iphone x",
//   price: 17000,
//   location: "Apple Store",
// };

// invokeAction({ action: "add", data: newData });

// 4.
const updateId = "767580d5-f509-4f45-98f9-28e74ec4af66";

// const updateData = {
//   name: "iPhone X",
//   price: 16000,
//   location: "Apple Store",
// };

// invokeAction({ action: "updateById", id: updateId, data: updateData });

// 5.
invokeAction({ action: "removeById", id: updateId });
