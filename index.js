// // const Calc = require("calc-js").Calc;
// // console.log(process.argv);
// // const [, , a, b] = process.argv;
// // console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());
// // // console.log(new Calc(parseFloat(a)).sum(parseFloat(b)).finish()); 0.1 0.2

// const path = require("path");
// // // относительній, полусим абсолютній
// // console.log(path.resolve("dateUtils.js"));

// const fs = require("fs");
// // const qwe = path.resolve("./qwe");
// // const qwe1 = "./qwe";
// // console.log(qwe, qwe1);

// // клас представление, фукнкццію помещаем в колбек, параметр файл, якхочемо прочитати
// fs.readFile(path.resolve("./packege.json"), "utf8", (error, data) => {
//   if (error) {
//     console.error("error");
//   }
//   console.log(data);
// });

// npm init -y
// npm i nodemon
// npm  i jest --save-dev

// const date = new Date();
// console.log(date.getFullYear());
// console.log("welcome");

// пакети:
// - разработка => dependencies
// - на продакш та разроботку  => devDependencies --save-dev

// CommonJS
// const nodemon = require("nodemon");

// const users = require("./users");
// console.log(users);

// const { admins } = require("./users");
// console.log(admins);

// const { getCurrentMonth } = require("./date");

// const currentMonth = getCurrentMonth();
// const currentMonth = require("./date").getCurrentMonth();
// const currentMonth = require("./date/getCurrentMonth")();
// console.log(`Зараз ${currentMonth} місяць)`);

// const user = new require("./users");

// const date = new Date();
// console.log(`Toda is  ${date.getFullYear()}`);
// console.log(`Toda is ${date}`);

// console.log("hello");
// const users = require("./users");
// console.log(users);

// const { admins } = require("./users");
// console.log(admins[3]);

// const { getCurrentMonth } = require("./datep");
// const currentMonth = getCurrentMonth();
// console.log(`current month is ${currentMonth}`);

const currentMonth = require("./datep").getCurrentMonth();
console.log(`current month is ${currentMonth}`);
