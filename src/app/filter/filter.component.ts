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
  @Input() hotelDataLoading: boolean = false;
  @Input() currHotels: Hotel[] = [];

  searchTerm : FormControl = new FormControl();
  priceUpper : FormControl = new FormControl();
  priceLower : FormControl = new FormControl();
  cityTerm : FormControl = new FormControl();

  currSearchTerm: string = "";
  currPriceUpper: number;
  currPriceLower: number;
  currCityTerm: string = "";

  item = {
    isocode: 'us'
  };

  filters: boolean = false;

  constructor() { }

  clearFields() {
    if (this.searchTerm) {
      this.searchTerm.reset();
    }
    if (this.priceUpper) {
      this.priceUpper.reset();
    }
    if (this.priceLower) {
      this.priceLower.reset();
    }
    if (this.cityTerm) {
      this.cityTerm.reset();
    }
    this.currHotels = this.hotels;
  }

  refilter(passedSearchTerm, passedPriceLower, passedPriceUpper, passedCityTerm, passedCountryCode) {
    this.currHotels = this.hotels;
    if (passedSearchTerm && passedSearchTerm.length > 2) {
      this.currHotels = this.currHotels.filter(function(hotel) {
        return hotel.hotelStaticContent.name.toLowerCase().includes(passedSearchTerm.toLowerCase());
      })
    }
    if (passedPriceLower && passedPriceLower >= 50) {
      this.currHotels = this.currHotels.filter(function(hotel) {
        return hotel.lowestAveragePrice.amount > Number(passedPriceLower);
      })
    }
    if (passedPriceUpper && passedPriceUpper >= 50) {
      this.currHotels = this.currHotels.filter(function(hotel) {
        return hotel.lowestAveragePrice.amount < Number(passedPriceUpper);
      })
    }
    if (passedCityTerm && passedCityTerm.length > 2) {
      this.currHotels = this.currHotels.filter(function(hotel) {
        return hotel.hotelStaticContent.address.city.toLowerCase().includes(passedCityTerm.toLowerCase());
      })
    }
    this.currHotels = this.currHotels.filter(function(hotel) {
      return hotel.hotelStaticContent.address.countryCode.toLowerCase() == passedCountryCode;
    })
    //console.log(this.currHotels);
  }

  toggleFilter() {
    this.filters = !this.filters;
  }

  baseRefilter() {
    this.refilter(
      this.currSearchTerm, 
      this.currPriceLower, 
      this.currPriceUpper, 
      this.currCityTerm,
      this.item.isocode
    );
  }

  ngOnInit() {
    this.searchTerm.valueChanges.subscribe( term => {
      this.currSearchTerm = term;
      this.baseRefilter();
    })

    this.priceLower.valueChanges.subscribe( price => {
      this.currPriceLower = price;
      this.baseRefilter();
    })

    this.priceUpper.valueChanges.subscribe( price => {
      this.currPriceUpper = price;
      this.baseRefilter();   
    })

    this.cityTerm.valueChanges.subscribe( term => {
      this.currCityTerm = term;
      this.baseRefilter();          
    })
  }
}