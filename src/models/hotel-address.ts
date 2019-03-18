export class HotelAddress {
    line1: string;
    line2?: string;
    city: string;
    stateName: string;
    stateCode: string; //check for code?
    countryName: string;
    countryCode: string;
    zipCode: string;
    latitude: number;
    longitude: number;
    timeZoneId: string; //will be tz format, might have to use moment.js somewhere
}