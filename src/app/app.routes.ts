import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path : '' , component: HomeComponent} ,
    { path: 'products' , component: ProductsComponent},
    { path: 'about' , component: AboutComponent},
    { path: 'register' , component: RegisterComponent},
    { path: 'product' , component: ProductsComponent}
];
