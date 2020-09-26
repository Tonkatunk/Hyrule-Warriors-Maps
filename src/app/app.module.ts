// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { MatListModule } from '@angular/material/list';

// Components
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { AdventureComponent } from './maps/adventure/adventure.component';

@NgModule({
  declarations: [AppComponent, MapsComponent, AdventureComponent],
  imports: [BrowserModule, AppRoutingModule, MatListModule],
  exports: [MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
