import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { FilterComponent } from './filter/filter.component';
import { HotelCellComponent } from './hotel-cell/hotel-cell.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    FilterComponent,
    HotelCellComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
