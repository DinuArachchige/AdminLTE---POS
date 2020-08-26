import Promise = require("promise");
import {Item} from "../../../entity/item";
import {ItemDAO} from "../item-dao";
import {PoolConnection} from "mysql";


export class ItemDAOImpl implements ItemDAO {

    constructor(private connection: PoolConnection) {
    }

    delete(code: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM item WHERE item_code='${code}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    find(code: string): Promise<Array<Item>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM item WHERE item_code='${code}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<Item>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM item`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    save(entity: Item): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO item VALUES ('${entity.item_code}','${entity.description}','${entity.unitprice}','${entity.quantity}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    update(entity: Item): Promise<boolean> {
        return new Promise((resolve, reject) => {

            console.log(`UPDATE item SET description = '${entity.description}', unitprice ='${entity.unitprice}',quantity='${entity.quantity}' WHERE item_code='${entity.item_code}'`);
            this.connection.query(`UPDATE item SET description = '${entity.description}', unitprice ='${entity.unitprice}',quantity='${entity.quantity}' WHERE item_code='${entity.item_code}'`,
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
            this.connection.query("SELECT COUNT(*) as count FROM item ",
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