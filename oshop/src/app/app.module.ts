import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular5-data-table';

import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductsFilterComponent } from './products/products-filter/products-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './order.service';
import { ShopService } from './shop.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { AdminStatusComponent } from './admin/admin-status/admin-status.component';
import { ShopFormComponent } from './admin/shop-form/shop-form.component';
import { AdminShopsComponent } from './admin/admin-shops/admin-shops.component';
import { ShopsComponent } from './shops/shops.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductsFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    AdminStatusComponent,
    ShopFormComponent,
    AdminShopsComponent,
    ShopsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      // this routers for anonymoususers
      { path: '', component: ShopsComponent },
      { path: 'shops', component: ShopsComponent },
      { path: 'shops/products', component: ProductsComponent },
      { path: 'shops/products/:id', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },

      // this routers for normal users
      { path: 'check-out', component: CheckOutComponent, canActivate:[AuthGuard] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate:[AuthGuard] },
      { path: 'my-orders', component: MyOrdersComponent, canActivate:[AuthGuard] },
      { path: 'my-orders/:id', component: MyOrdersComponent, canActivate:[AuthGuard] },

      // this routers for admin's
      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/admin-products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
       path: 'admin/admin-orders',
       component: AdminOrdersComponent,
       canActivate: [AuthGuard, AdminAuthGuard]
     },
     {
      path: 'admin/admin-orders/:id',
      component: AdminStatusComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
      path: 'admin/shops/new',
      component: ShopFormComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
      path: 'admin/shops/:id',
      component: ShopFormComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
      path: 'admin/admin-shops',
      component: AdminShopsComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },

    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
