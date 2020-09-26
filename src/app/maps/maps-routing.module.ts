// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AdventureComponent } from './adventure/adventure.component';
import { MapsComponent } from './maps.component';

const routes: Routes = [
  {
    path: '',
    component: MapsComponent,
    children: [
      {
        path: 'adventure',
        component: AdventureComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
