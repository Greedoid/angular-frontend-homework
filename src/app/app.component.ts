import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { HotelResponse } from '../models/hotel-response';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor ( private hotelService: HotelsService) {}

  public hotelData: HotelResponse;
  public hotelDataLoading: boolean = true;
  public tries = 1;

  ngOnInit() {
    this.hotelService.getHotels()
      .subscribe((resp) => {
        this.hotelData = resp;
        this.hotelDataLoading = false;
      },
      err => {
        this.hotelDataLoading = false;
        this.hotelData = null;
      });
  }

  public mockData: any = {
    id: '907',
    rewards: {
      miles: 10000
    },
    lowestAveragePrice: {
      currency: 'USD',
      symbol: '&#36;',
      amount: 579
    },
    hotelStaticContent: {
      hotelId: 907,
      languageCode: 'en',
      mainImage: {
        category: 'EXTERIOR',
        url: 'http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg',
        source: 'VFML'
      },
      name: 'Omni Chicago Hotel & Suites Magnificent Mile',
      neighborhoodName: 'Magnificent Mile',
      address: {
        line1: '676 North Michigan Avenue',
        line2: null,
        city: 'Chicago',
        stateName: 'Illinois',
        stateCode: 'IL',
        countryName: 'United States',
        countryCode: 'US',
        zipCode: '60611',
        latitude: 41.89475,
        longitude: -87.62465,
        timeZoneId: 'America/Chicago'
      },
      stars: 4,
      rating: 9,
      numberOfReviews: 685,
      brandCode: '1324',
      brandName: 'Omni Hotels',
      propertyType: 204,
      propertyTypeName: 'Hotel'
    }
  };
}
