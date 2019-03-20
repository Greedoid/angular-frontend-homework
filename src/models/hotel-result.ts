import { Hotel } from "./hotel";

export class HotelResult {

    constructor (hotels = [], total = 0) {
        this.hotels = hotels;
        this.total = total;
    }

    total: number;
    hotels: Hotel[];
}
