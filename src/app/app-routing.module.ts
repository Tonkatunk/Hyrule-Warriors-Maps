// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {
    path: 'maps',
    component: MapsComponent,
  },
  { path: '**', redirectTo: 'maps' },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'maps',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
