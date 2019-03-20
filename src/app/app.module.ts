import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { FilterComponent } from './filter/filter.component';
import { HotelCellComponent } from './hotel-cell/hotel-cell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nCountrySelectModule, I18nCountrySelectService } from 'ngx-i18n-country-select';

export function setUpI18nCountrySelect(service: I18nCountrySelectService) {
  return () => service.use(['en', 'en']);
}


@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    FilterComponent,
    HotelCellComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule,
    ReactiveFormsModule,
    I18nCountrySelectModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'us-US' },
    I18nCountrySelectService,
    {
      provide: APP_INITIALIZER,
      useFactory: setUpI18nCountrySelect,
      deps: [I18nCountrySelectService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
