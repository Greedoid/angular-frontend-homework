import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HotelResponse } from '../../models/hotel-response';
import { FormControl } from '@angular/forms';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {

  @Input() hotels: Hotel[] = [];
  @Input() hotelDataLoading: boolean;
  @Input() currHotels: Hotel[] = [];

  searchTerm : FormControl = new FormControl();
  priceUpper : FormControl = new FormControl();
  priceLower : FormControl = new FormControl();
  cityTerm : FormControl = new FormControl();
  CountryTerm : FormControl = new FormControl();

  currSearchTerm: string = "";
  currPriceUpper: string = "";
  currPriceLower: string = "";
  currCityTerm: string = "";

  constructor() { }

  refilter(passedSearchTerm, passedPriceLower, passedPriceUpper, passedCityTerm) {
    this.currHotels = this.hotels;
    if (passedSearchTerm.length > 2) {
      this.currHotels = this.currHotels.filter(function(hotel) {
        return hotel.hotelStaticContent.name.toLowerCase().includes(passedSearchTerm.toLowerCase());
      })
    }
    if (passedPriceLower.length > 2) {
      this.currHotels = this.currHotels.filter(function(hotel) {
        return hotel.lowestAveragePrice.amount > Number(passedPriceLower);
      })
    }
    if (passedPriceUpper.length > 2) {
      this.currHotels = this.currHotels.filter(function(hotel) {
        return hotel.lowestAveragePrice.amount < Number(passedPriceUpper);
      })
    }
    if (passedCityTerm.length > 2) {
      this.currHotels = this.currHotels.filter(function(hotel) {
        return hotel.hotelStaticContent.address.city.toLowerCase().includes(passedCityTerm.toLowerCase());
      })
    }
  }

  ngOnInit() {
    this.searchTerm.valueChanges.subscribe( term => {
      this.currSearchTerm = term;
      if (term.length > 2) {
        this.currHotels = this.currHotels.filter(function(hotel) {
          return hotel.hotelStaticContent.name.toLowerCase().includes(term.toLowerCase());
        })
      }
      else {
        this.refilter(
          this.currSearchTerm, 
          this.currPriceLower, 
          this.currPriceUpper, 
          this.currCityTerm
        );
      }
    })

    this.priceLower.valueChanges.subscribe( price => {
      this.currPriceLower = price;
      if (price.length > 2) {
        this.currHotels = this.currHotels.filter(function(hotel) {
          return hotel.lowestAveragePrice.amount >= Number(price);
        })
      }
      else {
        this.refilter(
          this.currSearchTerm, 
          this.currPriceLower, 
          this.currPriceUpper, 
          this.currCityTerm
        );      
      }
    })

    this.priceUpper.valueChanges.subscribe( price => {
      this.currPriceUpper = price;
      if (price.length > 2) {
        this.currHotels = this.currHotels.filter(function(hotel) {
          return hotel.lowestAveragePrice.amount <= Number(price);
        })
      }
      else {
        this.refilter(
          this.currSearchTerm, 
          this.currPriceLower, 
          this.currPriceUpper, 
          this.currCityTerm
        );      
      }
    })

    this.cityTerm.valueChanges.subscribe( term => {
      this.currCityTerm = term;
      if (term.length > 2) {
        this.currHotels = this.currHotels.filter(function(hotel) {
          return hotel.hotelStaticContent.address.city.toLowerCase().includes(term.toLowerCase());
        })
      }
      else {
        this.refilter(
          this.currSearchTerm, 
          this.currPriceLower, 
          this.currPriceUpper, 
          this.currCityTerm
        );            
      }
    })
  }
}