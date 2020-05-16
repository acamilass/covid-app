import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../constants/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(BASE_URL);
  }

  getBrazil() {
    return this.http.get(`${BASE_URL}/brazil`)
      .pipe(map((res: any) => res.data));
  }

  getUsa() {
    return this.http.get(`${BASE_URL}/us`)
      .pipe(map((res: any) => res.data));
  }

  getChina() {
    return this.http.get(`${BASE_URL}/china`)
      .pipe(map((res: any) => res.data));
  }

  getItaly() {
    return this.http.get(`${BASE_URL}/italy`)
      .pipe(map((res: any) => res.data));
  }
}
