import Promise = require("promise");
import {Customer} from "../../../entity/customer";
import {CustomerDAO} from "../customer-dao";
import {PoolConnection} from "mysql";
import {Item} from "../../../entity/item";


export class CustomerDAOImpl implements CustomerDAO {

    constructor(private connection: PoolConnection) {
    }

    delete(id: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM customer WHERE cus_id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    find(id: string): Promise<Array<Customer>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM customer WHERE cus_id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<Customer>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM customer`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    save(entity: Customer): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO customer VALUES ('${entity.cus_id}','${entity.cus_name}','${entity.cus_address}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    update(entity: Customer): Promise<boolean> {
        return new Promise((resolve, reject) => {

            // console.log(`UPDATE customer SET cus_name = '${entity.cus_name}', cus_address ='${entity.cus_address}' WHERE cus_id='${entity.cus_id}'`);
            this.connection.query(`UPDATE customer SET cus_name = '${entity.cus_name}', cus_address ='${entity.cus_address}' WHERE cus_id='${entity.cus_id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }
    // update(entity: Item): Promise<boolean> {
    //     return new Promise((resolve, reject) => {
    //console.log(`UPDATE item SET description = '${entity.description}', unitprice ='${entity.unitprice}',quantity='${entity.quantity}' WHERE item_code='${entity.item_code}'`);
    //         this.connection.query(`UPDATE item SET description = '${entity.description}', unitprice ='${entity.unitprice}',quantity='${entity.quantity}' WHERE item_code='${entity.item_code}'`,
    //             (err, results) => {
    //
    //                 if (err) {
    //                     reject(err);
    //                 } else {
    //                     resolve(results.affectedRows > 0);
    //                 }
    //
    //             });
    //     });
    // }









    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT COUNT(*) as count FROM customer ",
                (err,results)=>{
                if(err){
                    reject(err);
                }else {
                    resolve(results[0].count);
                }
            });
            // myObj{"id"}
            // "C001"
            // myObj{"name width"}
            // "Kasun"
        });
    }

}