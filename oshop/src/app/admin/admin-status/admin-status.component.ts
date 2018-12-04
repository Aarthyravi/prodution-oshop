import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';
import { ActivatedRoute } from '@angular/router';
import { StatusService } from '../../status.service';


@Component({
  selector: 'app-admin-status',
  templateUrl: './admin-status.component.html',
  styleUrls: ['./admin-status.component.css']
})
export class AdminStatusComponent {

  status$;
  items = {};
  order = {};
  id;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private orderService: OrderService,
    private statusService: StatusService) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.status$ = statusService.getOrdersByOrderId(this.id);
    this.orderService.getOrdersByItems(this.id)
     .subscribe(items => {
       this.items = items;
       console.log(this.items);
     });
  }

  changeStatus(){
    if (this.id) this.statusService.update(this.id);
  }
}
