// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { TileComponent } from './maps/tile/tile.component';

@NgModule({
  declarations: [AppComponent, MapsComponent, TileComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
  ],
  exports: [
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
