import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { LoginComponent } from './views/login/login.component';
import { ProdutcCrudComponent } from './views/produtc-crud/produtc-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'product',
    component:ProdutcCrudComponent
  },
  {
    path:'product/create',
    component:ProductCreateComponent
  },
  {
    path:'product/update/:id',
    component:ProductUpdateComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
