import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { CommonModule } from "@angular/common";
import { By } from "@angular/platform-browser";
import { ContainersPageComponent } from "./containers-page.component";
import { ContainersService } from '../services/containers.service';
import { BeerContainerComponent } from '../components/beer-container/beer-container.component';

describe("#ContainersPageComponent", () => {
  let component: ContainersPageComponent;
  let fixture: ComponentFixture<ContainersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ContainersPageComponent,BeerContainerComponent],
      providers: [ContainersService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainersPageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("Should create", () => {
    expect(component).toBeTruthy();
  });
});
