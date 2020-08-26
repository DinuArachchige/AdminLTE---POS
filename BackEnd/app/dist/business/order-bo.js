"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factory_1 = require("../dao/dao-factory");
var Promise = require("promise");
var OrderBO = /** @class */ (function () {
    function OrderBO() {
    }
    OrderBO.prototype.findAllOrder = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                    var promise = orderDAO.findAll();
                    promise.then(function (orders) {
                        resolve(orders);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderBO.prototype.findOrder = function (code) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                    var promise = orderDAO.find(code);
                    promise.then(function (order) {
                        resolve(order);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderBO.prototype.saveOrder = function (order) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                    var promise = orderDAO.save(order);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderBO.prototype.updateOrder = function (order) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                    var promise = orderDAO.update(order);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderBO.prototype.deleteOrder = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                    var promise = orderDAO.delete(id);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderBO.prototype.countOrders = function () {
        return new Promise((function (resolve, reject) {
            db_pool_1.pool.getConnection((function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                    var promise = orderDAO.count();
                    promise.then(function (count) {
                        resolve(count);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
            }));
        }));
    };
    return OrderBO;
}());
exports.OrderBO = OrderBO;
