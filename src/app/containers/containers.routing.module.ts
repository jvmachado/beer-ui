import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainersPageComponent } from './pages/containers-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContainersPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
