import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent {
  shop = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shopService: ShopService) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.shopService.get(this.id).take(1).subscribe(s => this.shop = s);
  }

  save(shop){
    if (this.id) this.shopService.update(this.id, shop);
    else this.shopService.create(shop);

    this.router.navigate(['/admin/admin-shops']);
  }

  delete(){
    if (!confirm('Are you sure you want to delete this shop')) return;

    this.shopService.delete(this.id);
    this.router.navigate(['/admin/admin-shops']);

  }
}
