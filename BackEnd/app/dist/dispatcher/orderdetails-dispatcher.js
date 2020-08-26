"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var orderdetails_bo_1 = require("../business/orderdetails-bo");
var orderDetailDispatcher = express.Router();
orderDetailDispatcher.route("")
    .get(function (req, res) {
    var promise = new orderdetails_bo_1.OrderDetailsBO().findAllOrderDetails();
    promise.then(function (orders) {
        res.status(200).json(orders);
    }).catch(function (err) {
        res.status(500).send(err);
    });
})
    .head(cors({
    exposedHeaders: ["X-count"]
}), function (req, res) {
    var promise = new orderdetails_bo_1.OrderDetailsBO().countOrders();
    promise.then(function (count) {
        res.append("X-count", count + "");
        res.sendStatus(200);
    }).catch(function (error) {
        res.sendStatus(500);
    });
})
    .post(function (req, res) {
    if (!("description" in req.body && "unitprice" in req.body && "quantity" in req.body && "order_id" in req.body && "item_code" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new orderdetails_bo_1.OrderDetailsBO().saveOrderDetails(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
});
orderDetailDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new orderdetails_bo_1.OrderDetailsBO().findOrderDetails(req.params.id);
    promise.then(function (ordres) {
        if (ordres.length > 0) {
            res.status(200).send(ordres[0]);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .delete(function (req, res) {
    var promise = new orderdetails_bo_1.OrderDetailsBO().deleteOrderDetails(req.params.id);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .put(function (req, res) {
    if (!("order_id" in req.body && "order_date" in req.body && "cus_id" in req.body)) {
        console.log(req.body);
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.order_id !== req.params.id) {
        res.status(400).send("Mismatched Order ID");
        return;
    }
    var promise = new orderdetails_bo_1.OrderDetailsBO().updateOrderDetails(req.body);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
});
exports.default = orderDetailDispatcher;
