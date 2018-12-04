import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'product-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) {
      this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {

  }

}
