import { HotelResult } from "./hotel-result";
import { SELECT_VALUE_ACCESSOR } from "@angular/forms/src/directives/select_control_value_accessor";

export class HotelResponse {

    constructor (success=false, results=null, error=null) {
        this.success = success
        this.results = results
        this.error = error
    }
    error?: string;
    success: boolean;
    results?: HotelResult;
}