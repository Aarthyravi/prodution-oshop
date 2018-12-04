import { AuthService } from './../auth.service';
import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;
  items = {};
  id;
  constructor(
    private authService: AuthService,
    private orderService: OrderService) {

    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
    this.authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid))
                   .subscribe(items => {
                     this.items = items;
                    });


    /*this.orderService.getOrdersByItems(this.id)
     .subscribe(items => {
       this.items = items;
       console.log(this.items);
     });*/
  }
}
