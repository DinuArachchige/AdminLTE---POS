import {pool} from "../db/db-pool";
import {ItemDAO} from "../dao/custom/item-dao";
import {DAOTypes, getDAO} from "../dao/dao-factory";
import Promise =require("promise");
import {ItemDTO} from "../dto/item-dto";
import {OrderDTO} from "../dto/order-dto";
import {OrderDAO} from "../dao/custom/order-dao";
import {OrderDetailsDTO} from "../dto/orderdetails-dto";
import {OrderDetailsDAO} from "../dao/custom/orderdetails-dao";




export class OrderDetailsBO {

    findAllOrderDetails(): Promise<Array<OrderDetailsDTO>>{

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDetailsDAO = <OrderDetailsDAO> getDAO(DAOTypes.ORDERDETAILS, connection);

                    const promise = orderDetailsDAO.findAll();
                    promise.then(ordersdetails => {
                        resolve(ordersdetails);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });

    }


    findOrderDetails(code: string): Promise<Array<OrderDetailsDTO>>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDetailsDAO = <OrderDetailsDAO> getDAO(DAOTypes.ORDERDETAILS, connection);

                    const promise = orderDetailsDAO.find(code);
                    promise.then(order => {
                        resolve(order);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }


    saveOrderDetails(OrderDetails: OrderDetailsDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDetailsDAO = <OrderDetailsDAO> getDAO(DAOTypes.ORDERDETAILS, connection);

                    const promise = orderDetailsDAO.save(OrderDetails);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    updateOrderDetails(OrderDetails: OrderDetailsDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDetailsDAO = <OrderDetailsDAO> getDAO(DAOTypes.ORDERDETAILS, connection);

                    const promise = orderDetailsDAO.update(OrderDetails);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }



    deleteOrderDetails(id: string): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDetailsDAO = <OrderDetailsDAO> getDAO(DAOTypes.ORDERDETAILS, connection);

                    const promise = orderDetailsDAO.delete(id);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    countOrders():Promise<number>{
        return new Promise(((resolve, reject) => {
            pool.getConnection(((err, connection) => {
                if(err){
                    reject(err);
                }else {
                    const orderDetailsDAO =<OrderDetailsDAO>getDAO(DAOTypes.ORDERDETAILS, connection);
                    const promise =orderDetailsDAO.count();

                    promise.then(count=>{
                        resolve(count);
                    }).catch(err=>{
                        reject(err);
                    });
                }
            }));
        }));
    }


}