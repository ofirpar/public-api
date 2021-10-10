import { Component, OnInit } from '@angular/core';
import {MainService} from '../../services/main.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  get apiList() {
    return this.mainService.apiList;
  }

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
  }

}
