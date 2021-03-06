import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../constants/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  statesReport() {
    return this.http.get(BASE_URL)
      .pipe(map((res: any) => res.data));
  }

  brazilReport() {
    return this.http.get(`${BASE_URL}/brazil`)
      .pipe(map((res: any) => res.data));
  }

  usaReport() {
    return this.http.get(`${BASE_URL}/us`)
      .pipe(map((res: any) => res.data));
  }

  chinaReport() {
    return this.http.get(`${BASE_URL}/china`)
      .pipe(map((res: any) => res.data));
  }

  italyReport() {
    return this.http.get(`${BASE_URL}/italy`)
      .pipe(map((res: any) => res.data));
  }

  countriesReport() {
    return this.http.get(`${BASE_URL}/countries`)
      .pipe(map((res: any) => res.data));
  }
}
