import {Component, OnInit} from '@angular/core';
import {MainService} from '../../services/main.service';
import {ParamNames} from '../../interfaces/queryParams';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})


export class FiltersComponent implements OnInit {
  PROTOCOLS = ['HTTPS', 'HTTP'];
  get categoryList(): string[] {
    return this.mainService.categoryList;
  }
  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
  }

  setCategory(event: Event) {
    const category = (event.target as HTMLSelectElement).value;
    this.mainService.setFilter(ParamNames.CATEGORY, category);
  }

  setProtocol(event: Event) {
    const protocol = (event.target as HTMLSelectElement).value;
    const value = protocol === '' ? protocol : (protocol === 'HTTPS' ? 'true' : 'false')
    this.mainService.setFilter(ParamNames.HTTPS, value);
  }
}
