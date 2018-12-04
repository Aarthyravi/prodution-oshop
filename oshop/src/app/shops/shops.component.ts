import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from '../shop.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent {
  shops$;
  @Input('shop') shop;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shopService: ShopService) {
    this.shops$ = this.shopService.getShops();
  }
}
