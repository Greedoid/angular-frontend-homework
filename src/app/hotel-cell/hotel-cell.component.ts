import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-cell',
  templateUrl: './hotel-cell.component.html',
  styleUrls: ['./hotel-cell.component.less']
})
export class HotelCellComponent implements OnInit {

  @Input() hotelData: any;

  Arr = Array;

  constructor() { }

  ngOnInit() {
  }

}
