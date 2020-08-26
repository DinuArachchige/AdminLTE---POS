"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetailsDTO = /** @class */ (function () {
    function OrderDetailsDTO(description, unitprice, quantity, order_id, item_code) {
        this.description = description;
        this.unitprice = unitprice;
        this.quantity = quantity;
        this.order_id = order_id;
        this.item_code = item_code;
    }
    return OrderDetailsDTO;
}());
exports.OrderDetailsDTO = OrderDetailsDTO;
