import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainersService } from "./services/containers.service";
import { ContainersPageComponent } from "./pages/containers-page.component";
import { BeerContainerComponent } from "./components/beer-container/beer-container.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ContainersPageComponent, BeerContainerComponent],
  providers: [ContainersService]
})
export class ContainersModule {}
