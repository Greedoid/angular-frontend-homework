import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HotelCellComponent } from '../components/hotel-cell/hotel-cell.component'
 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelCellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
