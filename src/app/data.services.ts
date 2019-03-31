import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class DataService{


    constructor(private httpClient:  HttpClient ){

    }

    getData():Observable<any>{
        return  this.httpClient.get('./assets/data/data.json')
    }

}