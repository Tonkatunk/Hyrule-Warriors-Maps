// Angular
import { Component, OnInit } from '@angular/core';

// Material
import { MatDialog } from '@angular/material/dialog';

// Resources
import { MAP_LIST } from './../../assets/maps.json';
import { TILE_LIST } from './../../assets/maps/adventure/tiles.json';

// Components
import { TileComponent } from './tile/tile.component';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  public maps = MAP_LIST;
  public tiles = TILE_LIST;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openTile(tile: string) {
    this.dialog.open(TileComponent, { data: { tile: tile } });
  }
}
