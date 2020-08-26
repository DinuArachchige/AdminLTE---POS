import {OrderDAO} from "../order-dao";
import {PoolConnection} from "mysql";
import {Order} from "../../../entity/order";
import Promise =require("promise");




export class OrderDAOImpl  implements OrderDAO {


    constructor(private connection: PoolConnection){

    }
    delete(id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM orders WHERE order_id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id: string): Promise<Array<Order>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM orders WHERE order_id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    findAll(): Promise<Array<Order>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM orders`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: Order): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO orders VALUES ('${entity.order_id}','${entity.order_date}','${entity.cus_id}')`,
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

    update(entity: Order): Promise<boolean> {
        return new Promise((resolve, reject) => {


            this.connection.query(`UPDATE orders SET order_date = '${entity.order_date}', cus_id ='${entity.cus_id}' WHERE order_id='${entity.order_id}'`,
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
            this.connection.query("SELECT COUNT(*) as count FROM orders ",
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