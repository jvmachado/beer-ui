import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ContainersService } from "../services/containers.service";
import { BeerContainer, BeerType } from "../services/types/beer-container.type";

@Component({
  selector: "app-containers-page",
  templateUrl: "./containers-page.component.html",
  styleUrls: ["./containers-page.component.scss"]
})
export class ContainersPageComponent implements OnInit {
  containers;

  constructor(
    private service: ContainersService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.service.connect().subscribe(data => {
      this.containers = data;
      this.cdr.detectChanges();
    });
  }
}
