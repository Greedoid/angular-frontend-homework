import { HotelImage } from "./hotel-image";
import { HotelAddress } from "./hotel-address";

export class HotelStatic {
    hotelId: number;
    languageCode: string; //might need a language map? i.e map en:English
    mainImage: HotelImage;
    name: string;
    neighborhoodName: string;
    address: HotelAddress;
    stars: number; //contraints? <5?
    rating: number; //constraints? <10?
    numberOfReviews: number;
    brandCode: string;
    brandName: string;
    propertyType: number; //idk what this is
    propertyTypeName: string;
}