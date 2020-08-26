"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetails = /** @class */ (function () {
    function OrderDetails(description, unitprice, quantity, order_id, item_code) {
        this.description = description;
        this.unitprice = unitprice;
        this.quantity = quantity;
        this.order_id = order_id;
        this.item_code = item_code;
    }
    return OrderDetails;
}());
exports.OrderDetails = OrderDetails;
