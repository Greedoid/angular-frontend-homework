import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelResponse } from '../models/hotel-response';
import { map, catchError, retryWhen, take } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { HotelResult } from '../models/hotel-result';
import { HotelStatic } from '../models/hotel-static';
import { HotelAddress } from '../models/hotel-address';
import { HotelImage } from '../models/hotel-image';
import { AveragePrice } from '../models/average-price';
import { Rewards } from '../models/rewards';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  hotel_url: string = 'https://homework-app.rocketmiles.com/fe-homework/rates'
  hotels: Hotel[] = []

  constructor(private http: HttpClient) { }

  mapHotelResponse(json: any): HotelResponse {
    var hotelResponse = new HotelResponse();
    hotelResponse.success = json.success;
    hotelResponse.results = new HotelResult();
    hotelResponse.results.total = json.results.total;
    hotelResponse.results.hotels = [];
    for (var i = 0; i < json.results.hotels.length; i++) {
      var currHotel = new Hotel();

      var currHotelAddress = new HotelAddress();
      currHotelAddress.city = json.results.hotels[i].hotelStaticContent.address.city
      currHotelAddress.countryCode = json.results.hotels[i].hotelStaticContent.address.countryCode
      currHotelAddress.countryName = json.results.hotels[i].hotelStaticContent.address.countryName
      currHotelAddress.latitude = json.results.hotels[i].hotelStaticContent.address.latitude
      currHotelAddress.longitude = json.results.hotels[i].hotelStaticContent.address.longitude
      currHotelAddress.line1 = json.results.hotels[i].hotelStaticContent.address.line1
      currHotelAddress.line2 = json.results.hotels[i].hotelStaticContent.address.line2
      currHotelAddress.stateCode = json.results.hotels[i].hotelStaticContent.address.stateCode
      currHotelAddress.stateName = json.results.hotels[i].hotelStaticContent.address.stateName
      currHotelAddress.timeZoneId = json.results.hotels[i].hotelStaticContent.address.timeZoneId
      currHotelAddress.zipCode = json.results.hotels[i].hotelStaticContent.address.zipCode


      var currHotelMainImage = new HotelImage();
      currHotelMainImage.category = json.results.hotels[i].hotelStaticContent.mainImage.category
      currHotelMainImage.source = json.results.hotels[i].hotelStaticContent.mainImage.source
      currHotelMainImage.url = json.results.hotels[i].hotelStaticContent.mainImage.url

      var currHotelAveragePrice = new AveragePrice();
      currHotelAveragePrice.amount = json.results.hotels[i].lowestAveragePrice.amount
      currHotelAveragePrice.currency = json.results.hotels[i].lowestAveragePrice.currency
      currHotelAveragePrice.symbol = json.results.hotels[i].lowestAveragePrice.symbol

      var currHotelStaticContent = new HotelStatic();
      currHotelStaticContent.address = currHotelAddress;
      currHotelStaticContent.mainImage = currHotelMainImage;
      currHotelStaticContent.brandCode = json.results.hotels[i].hotelStaticContent.brandCode
      currHotelStaticContent.brandName = json.results.hotels[i].hotelStaticContent.brandName
      currHotelStaticContent.hotelId = json.results.hotels[i].hotelStaticContent.hotelId
      currHotelStaticContent.languageCode = json.results.hotels[i].hotelStaticContent.languageCode
      currHotelStaticContent.name = json.results.hotels[i].hotelStaticContent.name
      currHotelStaticContent.numberOfReviews = json.results.hotels[i].hotelStaticContent.numberOfReviews
      currHotelStaticContent.propertyType = json.results.hotels[i].hotelStaticContent.propertyType
      currHotelStaticContent.propertyTypeName = json.results.hotels[i].hotelStaticContent.propertyTypeName
      currHotelStaticContent.rating = json.results.hotels[i].hotelStaticContent.rating
      currHotelStaticContent.stars = json.results.hotels[i].hotelStaticContent.stars
      currHotelStaticContent.neighborhoodName = json.results.hotels[i].hotelStaticContent.neighborhoodName

      var currHotelRewards = new Rewards();
      currHotelRewards.miles = json.results.hotels[i].rewards.miles

      currHotel.id = json.results.hotels[i].id;
      currHotel.rewards = currHotelRewards;
      currHotel.hotelStaticContent = currHotelStaticContent;
      currHotel.lowestAveragePrice = currHotelAveragePrice;

      hotelResponse.results.hotels.push(currHotel)
    }
    
    return hotelResponse;
  }

  getHotels() {
    return this.http
      .get(this.hotel_url)
      .pipe(
        map(response => this.mapHotelResponse(response)),
        retryWhen(errors => errors.pipe(take(5)))
    );
  }
}
