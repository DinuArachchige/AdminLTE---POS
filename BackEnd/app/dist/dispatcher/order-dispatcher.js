"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var order_bo_1 = require("../business/order-bo");
var orderDispatcher = express.Router();
orderDispatcher.route("")
    .get(function (req, res) {
    var promise = new order_bo_1.OrderBO().findAllOrder();
    promise.then(function (orders) {
        res.status(200).json(orders);
    }).catch(function (err) {
        res.status(500).send(err);
    });
})
    .head(cors({
    exposedHeaders: ["X-count"]
}), function (req, res) {
    var promise = new order_bo_1.OrderBO().countOrders();
    promise.then(function (count) {
        res.append("X-count", count + "");
        res.sendStatus(200);
    }).catch(function (error) {
        res.sendStatus(500);
    });
})
    .post(function (req, res) {
    if (!("order_id" in req.body && "order_date" in req.body && "cus_id" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new order_bo_1.OrderBO().saveOrder(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
});
orderDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new order_bo_1.OrderBO().findOrder(req.params.id);
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
    var promise = new order_bo_1.OrderBO().deleteOrder(req.params.id);
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
    var promise = new order_bo_1.OrderBO().updateOrder(req.body);
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
exports.default = orderDispatcher;
