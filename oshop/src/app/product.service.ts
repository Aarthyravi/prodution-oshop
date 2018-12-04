import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  create(product){
    return this.db.list('products/').push(product);
  }

  getAll(){
    return this.db.list('/products');
  }

  getProductByShopId(id: string){
    return this.db.list('products', {
        query: {
          orderByChild: 'shopid',
          equalTo: id
        }
      });
    }

  get(productId){
    return this.db.object('products/' + productId);
  }

  update(productId, product){
    return this.db.object('products/' + productId).update(product);
  }

  delete(productId){
    return this.db.object('products/' + productId).remove();
  }
}
