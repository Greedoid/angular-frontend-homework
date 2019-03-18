import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { HotelResponse } from '../models/hotel-response';
import { Hotel } from '../models/hotel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public hotelData: HotelResponse;
  public hotelDataLoading: boolean = true;
  public hotels: Hotel[];

  constructor(private hotelService: HotelsService) { }

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
  }
}
