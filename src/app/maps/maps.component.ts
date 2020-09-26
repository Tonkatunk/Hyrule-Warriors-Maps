// Angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  public maps;

  constructor() {}

  ngOnInit(): void {
    this.maps = [{ name: 'Adventure', link: 'maps/adventure' }];
  }
}
