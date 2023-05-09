import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { city } from '../data/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpclient:HttpClient) { }

  create(city:city):Observable<any>{
    return this.httpclient.post("http://localhost/countrycity/api/city",city)
  }
}

