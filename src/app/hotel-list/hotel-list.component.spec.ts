import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListComponent } from './hotel-list.component';
import { HotelCellComponent } from '../hotel-cell/hotel-cell.component';

describe('HotelListComponent', () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HotelListComponent,
        HotelCellComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
