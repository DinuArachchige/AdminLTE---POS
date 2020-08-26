import express =require("express");
import  cors =require("cors");
import {ItemBO} from "../business/item-bo";
import {OrderBO} from "../business/order-bo";
import {OrderDTO} from "../dto/order-dto";
import {OrderDetailsBO} from "../business/orderdetails-bo";


const orderDetailDispatcher = express.Router();

orderDetailDispatcher.route("")

    .get((req, res) => {
        const promise =new OrderDetailsBO().findAllOrderDetails();
        promise.then(orders=>{
            res.status(200).json(orders);
        }).catch(err=>{
            res.status(500).send(err);
        });

    })

    .head(cors({
        exposedHeaders:["X-count"]
    }),(req,res)=>{
        const promise = new OrderDetailsBO().countOrders();
        promise.then(count=>{
            res.append("X-count", count+"");
            res.sendStatus(200);
        }).catch(error=>{
            res.sendStatus(500);
        })

    })


    .post((req, res) => {

        if (!("description" in req.body && "unitprice" in req.body && "quantity" in req.body  && "order_id" in req.body  && "item_code" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        const promise = new OrderDetailsBO().saveOrderDetails(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    });

orderDetailDispatcher.route("/:id")
    .get((req, res) => {
        const promise = new OrderDetailsBO().findOrderDetails(req.params.id);
        promise.then(ordres=>{

            if (ordres.length > 0){
                res.status(200).send(ordres[0]);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });
    })

    .delete((req, res) => {

        const promise = new OrderDetailsBO().deleteOrderDetails(req.params.id);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    })

    .put((req, res) => {
        if (!("order_id" in req.body && "order_date" in req.body && "cus_id" in req.body)){

            console.log(req.body);
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.order_id !== req.params.id){
            res.status(400).send("Mismatched Order ID");
            return;
        }

        const promise = new OrderDetailsBO().updateOrderDetails(req.body);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });
    });


export default orderDetailDispatcher;