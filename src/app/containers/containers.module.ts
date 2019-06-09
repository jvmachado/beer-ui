import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainersService } from './services/containers.service';
import { ContainersPageComponent } from './pages/containers-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContainersPageComponent],
  providers: [ContainersService]
})
export class ContainersModule {}
