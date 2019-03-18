import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HotelCellComponent } from '../components/hotel-cell/hotel-cell.component'
 
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HotelCellComponent
  ],
  imports: [
    BrowserModule,
    HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
