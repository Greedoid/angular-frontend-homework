import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nCountrySelectModule } from 'ngx-i18n-country-select';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelCellComponent } from './hotel-cell/hotel-cell.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FilterComponent,
        HotelListComponent,
        HotelCellComponent
      ],
      imports: [
        ReactiveFormsModule,
        I18nCountrySelectModule,
        HttpClientModule,
        HttpModule
      ]
    }).compileComponents();
  }));

  it('should default loading to true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;    
  });
});
