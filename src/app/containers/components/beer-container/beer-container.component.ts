import { Component, Input } from "@angular/core";;
import { BeerContainer, BeerType } from '../../services/types/beer-container.type';

@Component({
  selector: "app-beer-container",
  templateUrl: "./beer-container.component.html",
  styleUrls: ["./beer-container.component.scss"]
})
export class BeerContainerComponent {
  @Input()
  beer: BeerContainer

  constructor() {}

  getBeerName(beerType: number) {
    switch (beerType) {
      case BeerType.PILSNER:
        return "Pilsner";
      case BeerType.IPA:
        return "IPA";
      case BeerType.LAGER:
        return "Lager";
      case BeerType.PALEALE:
        return "Pale Ale";
      case BeerType.STOUT:
        return "Stout";
      case BeerType.WHEATBEER:
        return "Wheat Beer";
      default:
        return null;
    }
  }
}
