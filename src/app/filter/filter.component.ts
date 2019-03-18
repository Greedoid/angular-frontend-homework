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

  constructor() { }

  ngOnInit() {
    this.searchTerm.valueChanges.subscribe( term => {
      if (term.length > 0) {
        this.currHotels = this.hotels.filter(function(hotel) {
          return hotel.hotelStaticContent.name.toLowerCase().includes(term.toLowerCase());
        })
      }
      else {
        this.currHotels = this.hotels;
      }
    })
  }
}