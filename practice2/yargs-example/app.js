// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

// 2. варінт з commander
const { program } = require("commander");

const productsOperations = require("./products");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const products = await productsOperations.getAll();
      console.log(products);
      break;
    case "getById":
      const product = await productsOperations.getById(id);
      if (!product) {
        throw new Error(`Product with id=${id} not found`);
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

// const arr = hideBin(process.argv);

// const { argv } = yargs(arr);
// invokeAction(argv);

// 2. варінт з commander
program
  .option("-a, --action <type>", "product operation")
  .option("-i, --id <type>", "product id")
  .option("-n, --name <type>", "product name")
  .option("-p, --price <type>", "product price")
  .option("-l, --location <type>", "product location");
program.parse(process.argv);

const options = program.opts();

invokeAction(options);
