import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductListComponent } from './products/product-list.component';
import { ConvertSpaces } from './shared/convertSpaces.component'
import { StarComponent } from './shared/star.component'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail.component'
import { RouterModule } from '@angular/router'
import { ProductDetailGuard } from './products/product-detail.guard'

 
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertSpaces,
    StarComponent,
    HomeComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: HomeComponent},
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo:'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
