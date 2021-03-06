import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainersPageComponent } from './containers/pages/containers-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ContainersPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
