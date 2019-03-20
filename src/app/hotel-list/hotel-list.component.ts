import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/models/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.less']
})
export class HotelListComponent{

  @Input() hotels: Hotel[];

}
