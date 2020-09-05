import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertSpaces } from './product-list/convertSpaces.component'
import { StarComponent } from './shared/star.component'
import { HttpClientModule } from '@angular/common/http'
 
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertSpaces,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
