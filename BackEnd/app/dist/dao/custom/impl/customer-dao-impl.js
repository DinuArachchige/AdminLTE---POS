"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var CustomerDAOImpl = /** @class */ (function () {
    function CustomerDAOImpl(connection) {
        this.connection = connection;
    }
    CustomerDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM customer WHERE cus_id='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM customer WHERE cus_id='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM customer", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO customer VALUES ('" + entity.cus_id + "','" + entity.cus_name + "','" + entity.cus_address + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log(`UPDATE customer SET cus_name = '${entity.cus_name}', cus_address ='${entity.cus_address}' WHERE cus_id='${entity.cus_id}'`);
            _this.connection.query("UPDATE customer SET cus_name = '" + entity.cus_name + "', cus_address ='" + entity.cus_address + "' WHERE cus_id='" + entity.cus_id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    // update(entity: Item): Promise<boolean> {
    //     return new Promise((resolve, reject) => {
    //console.log(`UPDATE item SET description = '${entity.description}', unitprice ='${entity.unitprice}',quantity='${entity.quantity}' WHERE item_code='${entity.item_code}'`);
    //         this.connection.query(`UPDATE item SET description = '${entity.description}', unitprice ='${entity.unitprice}',quantity='${entity.quantity}' WHERE item_code='${entity.item_code}'`,
    //             (err, results) => {
    //
    //                 if (err) {
    //                     reject(err);
    //                 } else {
    //                     resolve(results.affectedRows > 0);
    //                 }
    //
    //             });
    //     });
    // }
    CustomerDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT COUNT(*) as count FROM customer ", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0].count);
                }
            });
            // myObj{"id"}
            // "C001"
            // myObj{"name width"}
            // "Kasun"
        });
    };
    return CustomerDAOImpl;
}());
exports.CustomerDAOImpl = CustomerDAOImpl;
