import {Component, Input, OnInit} from '@angular/core';
import {ApiEntry} from '../../interfaces/api-response';

@Component({
  selector: 'app-api-card',
  templateUrl: './api-card.component.html',
  styleUrls: ['./api-card.component.scss']
})
export class ApiCardComponent implements OnInit {
  @Input() apiEntry: ApiEntry
  constructor() { }

  ngOnInit(): void {
  }

}
