import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { HotelResponse } from '../models/hotel-response';
import { Hotel } from '../models/hotel';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public hotelData: HotelResponse = new HotelResponse();
  public hotelDataLoading: boolean = true;
  public hotels: Hotel[] = [];

  counter$: Observable<number>
  count = 10;

  constructor(private hotelService: HotelsService) {
    this.counter$ = timer(0,1000).pipe (
      take(this.count),
      map(()=> --this.count)
    )
   }

  ngOnInit() {
    this.hotelService.getHotels()
      .subscribe((resp) => {
        this.hotelData = resp;
        this.hotels = resp.results.hotels;
        this.hotelDataLoading = false;
      },
      err => {
        this.hotelDataLoading = false;
        this.hotelData = null;
      });
   this.counter$.subscribe((count) => {
     if (count < 1 ) {
       this.hotelDataLoading = false;
     }
   }); 
  }
}
