"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var dbconfig = require("../../config");
var currencymodel_1 = require("./models/currencymodel");
var person_model_1 = require("./models/person.model");
// Check example at https://github.com/CarlosRodrigues/Sequelize-typescript-example
// and https://github.com/suksant/sequelize-typescript-examples
// with help here https://github.com/RobinBuschmann/st-366 
exports.sequelize = new sequelize_typescript_1.Sequelize({
    database: dbconfig.database,
    dialect: dbconfig.dialect,
    username: dbconfig.username,
    password: dbconfig.password,
    host: dbconfig.host,
    port: dbconfig.port
});
exports.sequelize.addModels([currencymodel_1.Currency]);
exports.sequelize.addModels([person_model_1.Person]);
//initializeDatabase();
//populateData();
exports.sequelize.authenticate().then(function () {
    console.log("Connected to DB");
})
    .catch(function (err) {
    console.log(err);
});
// Force Initialization of the models and wipe all data ///
function initializeDatabase() {
    exports.sequelize
        .sync({ force: true })
        .then(function () {
        console.log('Connection synced');
        return;
    })
        .catch(function (err) {
        console.log('err');
    });
}
// Adding new currencies to the DB ///
function populateData() {
    var mycurrency = new currencymodel_1.Currency({ country: 'Cambodia', exchangerate: 3700 });
    mycurrency.save()
        .then(function () {
        console.log("City " + mycurrency.country + " added to DB");
    })
        .catch(function (err) {
        console.log(err);
    });
}
//# sourceMappingURL=database.js.map