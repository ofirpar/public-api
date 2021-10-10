import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QueryParams} from '../interfaces/queryParams';

@Injectable({
  providedIn: 'root'
})
export class ApiFetchService {

  constructor(
    private http: HttpClient
  ) { }

  getApiList(qs?: string){
    let url = 'https://api.publicapis.org/entries' + qs || '';
    return this.http.get(url).toPromise();

  }

  getCategoryList() {
    let url = 'https://api.publicapis.org/categories';
    return this.http.get(url).toPromise();
  }
}
