import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ApiListComponent } from './components/api-list/api-list.component';
import { FiltersComponent } from './components/filters/filters.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiCardComponent } from './components/api-card/api-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ApiListComponent,
    FiltersComponent,
    ApiCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
