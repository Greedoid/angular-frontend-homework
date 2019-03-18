import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Hotel } from '../models/hotel';



@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  hotel_url: string = 'https://homework-app.rocketmiles.com/fe-homework/rates'
  hotels: Hotel[] = []

  constructor(private http: Http) { }

  getHotels() {
    return this.http.get(this.hotel_url);

  }
}
