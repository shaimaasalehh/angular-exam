import { Injectable } from '@angular/core';
import { country } from '../data/country';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpclient:HttpClient) { }

  create(country:country):Observable<any>{
    return this.httpclient.post("http://localhost/countrycity/api/country",country)
  }
  search(name:string):Observable<any>{
    return this.httpclient.get("http://localhost/countrycity/api/country/"+name)
  }
}
