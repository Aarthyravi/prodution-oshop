import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private db: AngularFireDatabase) { }

  create(shop){
    return this.db.list('/shops').push(shop);
  }

  getShops() {
    return this.db.list('/shops',{
      query: {
        orderByChild: "location"

      }
    });
  }

  get(shopId){
    return this.db.object('shops/' + shopId);
  }

  update(shopId, shop){
    return this.db.object('shops/' + shopId).update(shop);
  }

  delete(shopId){
    return this.db.object('shops/' + shopId).remove();
  }

}
