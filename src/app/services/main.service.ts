import { Injectable } from '@angular/core';
import {ApiFetchService} from './api-fetch.service';
import {ParamNames, QueryParams} from '../interfaces/queryParams';
import {ApiEntry, ApiResponse} from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  currentFilters: QueryParams = {};
  apiList: ApiEntry[];
  categoryList: string[];
  constructor(
    private apiService: ApiFetchService
  ) {
    this.getApiList();
    this.getCategoryList();
  }

  setFilter(filterName: ParamNames, value: string){

    this.currentFilters[filterName] = value !== '' ? value : undefined;
    this.getApiList();
  }

  private getApiList() {
    const queryString = this.createFilterQueryString(this.currentFilters);
    this.apiService.getApiList(queryString).then((response: ApiResponse) => {
      console.log('### response', response);
      this.apiList = response.entries;
      // location.search = queryString;
      window.history.pushState('', '', origin + queryString);
    })
  }

  private getCategoryList() {
    this.apiService.getCategoryList().then((response: string[]) => {
      console.log('### response', response);
      this.categoryList = response;
    })
  }

  createFilterQueryString(currentFilters: QueryParams): string {
    let qpUrl = ''
    if (Object.keys(currentFilters).length) {
      qpUrl += '?'
    }
    if (currentFilters?.title) {
      qpUrl += `title=${currentFilters.title}&`
    }
    if (currentFilters?.category) {
      qpUrl += `category=${currentFilters.category}&`
    }
    if (currentFilters?.https) {
      qpUrl += `https=${currentFilters.https}&`
    }
    return qpUrl = qpUrl.slice(0, -1);
  }
}
