// Angular
import { Component, OnInit, Inject } from '@angular/core';

// Material
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// Models
import { Tile } from '../../models/tile.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { tile: Tile }) {}

  ngOnInit(): void {}
}
