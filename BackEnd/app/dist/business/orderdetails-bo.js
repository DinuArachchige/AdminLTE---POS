"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factory_1 = require("../dao/dao-factory");
var Promise = require("promise");
var OrderDetailsBO = /** @class */ (function () {
    function OrderDetailsBO() {
    }
    OrderDetailsBO.prototype.findAllOrderDetails = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailsDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetailsDAO.findAll();
                    promise.then(function (ordersdetails) {
                        resolve(ordersdetails);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderDetailsBO.prototype.findOrderDetails = function (code) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailsDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetailsDAO.find(code);
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
    OrderDetailsBO.prototype.saveOrderDetails = function (OrderDetails) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailsDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetailsDAO.save(OrderDetails);
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
    OrderDetailsBO.prototype.updateOrderDetails = function (OrderDetails) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailsDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetailsDAO.update(OrderDetails);
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
    OrderDetailsBO.prototype.deleteOrderDetails = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailsDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetailsDAO.delete(id);
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
    OrderDetailsBO.prototype.countOrders = function () {
        return new Promise((function (resolve, reject) {
            db_pool_1.pool.getConnection((function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailsDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetailsDAO.count();
                    promise.then(function (count) {
                        resolve(count);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
            }));
        }));
    };
    return OrderDetailsBO;
}());
exports.OrderDetailsBO = OrderDetailsBO;
