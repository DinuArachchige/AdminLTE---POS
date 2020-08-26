import {OrderDAO} from "../order-dao";
import {PoolConnection} from "mysql";
import {Order} from "../../../entity/order";
import Promise =require("promise");
import {OrderDetailsDAO} from "../orderdetails-dao";
import {OrderDetails} from "../../../entity/orderdetails";




export class OrderDetailsDAOImpl  implements OrderDetailsDAO {


    constructor(private connection: PoolConnection){

    }
    delete(id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM order_details WHERE order_id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id: string): Promise<Array<OrderDetails>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM order_details WHERE order_id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    findAll(): Promise<Array<OrderDetails>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM order_details`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: OrderDetails): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO order_details VALUES ('${entity.description}','${entity.unitprice}','${entity.quantity}','${entity.order_id}','${entity.item_code},')`,
                (err, results) => {
                    console.log(results);

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: OrderDetails): Promise<boolean> {
        return new Promise((resolve, reject) => {


            this.connection.query(`UPDATE order_details SET order_date = '${entity.description}', cus_id ='${entity.unitprice}' WHERE order_id='${entity.order_id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT COUNT(*) as count FROM order_details ",
                (err,results)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(results[0].count);
                    }
                });

        });
    }

}