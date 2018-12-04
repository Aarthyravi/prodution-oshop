import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShopService } from '../../shop.service';
import { Subscription } from 'rxjs';
import { Shop } from '../../models/shop';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-shops',
  templateUrl: './admin-shops.component.html',
  styleUrls: ['./admin-shops.component.css']
})
export class AdminShopsComponent implements OnInit, OnDestroy {

  shops: Shop[];
  subscription: Subscription;
  tableResource: DataTableResource<Shop>;
  items: Shop[] = [];
  itemCount: number;

  constructor(private shopService: ShopService) {
    this.subscription = this.shopService.getShops()
      .subscribe(shops => {
        this.shops = shops;
        this.initializeTable(shops);
      });
   }

   private initializeTable(shops: Shop[]) {
     this.tableResource = new DataTableResource(shops);
     this.tableResource.query({ offset: 0})
       .then(items => this.items = items);
     this.tableResource.count()
       .then(count => this.itemCount = count);
   }

   reloadItems(params){
     if (!this.tableResource) return;

     this.tableResource.query(params)
       .then(items => this.items = items);
   }

   filter(query: string){
     let filteredShops  = (query) ?
       this.shops.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : this.shops;

     this.initializeTable(filteredShops);
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

  ngOnInit() {
  }

}
