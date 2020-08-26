
import {OrderDetails} from "../../entity/orderdetails";

export interface OrderDetailsDAO extends SuperDAO<OrderDetails, string>{
    count():Promise<number>;
}