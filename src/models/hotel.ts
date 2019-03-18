import { Rewards } from "./rewards";
import { AveragePrice } from "./average-price";
import { HotelStatic } from "./hotel-static";

export class Hotel {
   id: string;
   rewards: Rewards;
   lowestAveragePrice: AveragePrice;
   hotelStaticContent: HotelStatic;
}