import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private db: AngularFireDatabase) { }


  get(orderId){
    return this.db.object('orders/' + orderId);
  }

  update(orderId){
    return this.db.object('orders/' + orderId).update({status: "Shipped"});
  }

  getOrdersByOrderId(id){
    return this.db.object('orders/' + id);
  }

}
