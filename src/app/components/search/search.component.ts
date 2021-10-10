import {Component, OnInit} from '@angular/core';
import {MainService} from '../../services/main.service';
import {ParamNames} from '../../interfaces/queryParams';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
  }

  search(eventData: Event) {
    const searchText = (eventData.target as HTMLInputElement).value;
    this.mainService.setFilter(ParamNames.TITLE, searchText);
  }
}
