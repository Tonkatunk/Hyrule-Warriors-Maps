// Angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss'],
})
export class AdventureComponent implements OnInit {
  public background: string;
  public map: string;
  public tiles: string[];

  constructor() {}

  ngOnInit(): void {
    this.background = '../../../assets/backgrounds/adventure_bg.png';
    this.map = '../../../assets/maps/adventure_map.png';
  }
}
