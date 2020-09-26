// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TileComponent } from './tile/tile.component';

@NgModule({
  declarations: [TileComponent],
  imports: [CommonModule],
  entryComponents: [TileComponent],
})
export class MapsModule {}
