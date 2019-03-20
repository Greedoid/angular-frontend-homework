import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelListComponent } from '../hotel-list/hotel-list.component';
import { I18nCountrySelectModule } from 'ngx-i18n-country-select';
import { HotelCellComponent } from '../hotel-cell/hotel-cell.component';
import TestData from '../../assets/test_data.json'
import { Hotel } from 'src/models/hotel';


describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let hotels: Hotel[] = TestData.results.hotels;
  let filtered_hotels: Hotel[] = TestData.results.hotels.slice(3,10);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        I18nCountrySelectModule
      ],
      declarations: [ FilterComponent, HotelListComponent, HotelCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset filters on refilter', () => {
    component.hotels = hotels;
    component.currHotels = filtered_hotels;
    component.baseRefilter();
    expect(component.hotels).toEqual(component.currHotels);
  });

  it('should filter with price', () => {
    component.hotels = hotels;
    component.currHotels = hotels;
    component.refilter(
      "",
      1000,
      0,
      "",
      "us"
    );
    expect(component.currHotels.length).toEqual(1);
    expect(component.currHotels[0].hotelStaticContent.name).toEqual("Hilton Garden Inn Chicago O'Hare Airport");
    expect(component.currHotels[0].lowestAveragePrice.amount).toBeGreaterThanOrEqual(1000);
  });

  it('should filter based on name', () => {
    component.hotels = hotels;
    component.currHotels = hotels;
    component.refilter(
      "Omni",
      0,
      0,
      "",
      "us"
    );
    expect(component.currHotels.length).toEqual(1);
    expect(component.currHotels[0].hotelStaticContent.name).toEqual("Omni Chicago Hotel & Suites Magnificent Mile");

  });

  it('should filter based on city', () => {
    component.hotels = hotels;
    component.currHotels = hotels;
    component.refilter(
      "",
      0,
      0,
      "Lincoln",
      "us"
    );
    expect(component.currHotels.length).toEqual(1);
    expect(component.currHotels[0].hotelStaticContent.address.city).toEqual("Lincolnshire");
  });

  it('should filter with multiple', () => {
    component.hotels = hotels;
    component.currHotels = hotels;
    component.refilter(
      "",
      400,
      0,
      "Chicag",
      "us"
    );
    expect(component.currHotels.length).toEqual(7);
    component.refilter(
      "",
      400,
      700,
      "Chicag",
      "us"
    );
    expect(component.currHotels.length).toEqual(4);
  });

  it('should filter down to empty', () => {
    component.hotels = hotels;
    component.currHotels = hotels;
    component.refilter(
      "",
      400,
      200,
      "Chicag",
      "us"
    );
    expect(component.currHotels.length).toEqual(0);
  });
});
