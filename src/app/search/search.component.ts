import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  constructor() { }

  ngOnInit(): void {
  }

}
