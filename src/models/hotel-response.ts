import { HotelResult } from "./hotel-result";

export class HotelResponse {
    success: boolean;
    results?: HotelResult;
}