"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_dao_impl_1 = require("./custom/impl/customer-dao-impl");
var item_dao_impl_1 = require("./custom/impl/item-dao-impl");
var order_dao_impl_1 = require("./custom/impl/order-dao-impl");
var orderdetails_dao_impl_1 = require("./custom/impl/orderdetails-dao-impl");
var DAOTypes;
(function (DAOTypes) {
    DAOTypes[DAOTypes["CUSTOMER"] = 0] = "CUSTOMER";
    DAOTypes[DAOTypes["ITEM"] = 1] = "ITEM";
    DAOTypes[DAOTypes["ORDER"] = 2] = "ORDER";
    DAOTypes[DAOTypes["ORDERDETAILS"] = 3] = "ORDERDETAILS";
})(DAOTypes = exports.DAOTypes || (exports.DAOTypes = {}));
function getDAO(daoType, connection) {
    switch (daoType) {
        case DAOTypes.CUSTOMER:
            return new customer_dao_impl_1.CustomerDAOImpl(connection);
        case DAOTypes.ITEM:
            return new item_dao_impl_1.ItemDAOImpl(connection);
        case DAOTypes.ORDER:
            return new order_dao_impl_1.OrderDAOImpl(connection);
        case DAOTypes.ORDERDETAILS:
            return new orderdetails_dao_impl_1.OrderDetailsDAOImpl(connection);
        default:
            return null;
    }
}
exports.getDAO = getDAO;
