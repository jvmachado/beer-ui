import { BeerContainerComponent } from "./beer-container.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { CommonModule } from "@angular/common";
import { By } from "@angular/platform-browser";

describe("#BeerContainerComponent", () => {
  let component: BeerContainerComponent;
  let fixture: ComponentFixture<BeerContainerComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [BeerContainerComponent],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerContainerComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.beer = {
      beerType: 1,
      temperature: 5,
      isOutRange: false
    };

    fixture.detectChanges();
  });

  it("Should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should set the title to Pilsner", () => {
    const title = debugElement.query(By.css("h2"));
    expect(title.nativeElement.textContent).toContain("Pilsner");
  });

  it("Should pulse when isOutRange is true", () => {
component.beer.isOutRange = true;
fixture.detectChanges();

    const title = debugElement.query(By.css(".card"));
    expect(title.nativeElement.classList.contains("pulse")).toBeTruthy();
  });

  it("Should not pulse when isOutRange is false", () => {
    component.beer.isOutRange = false;
    fixture.detectChanges();
    
        const card = debugElement.query(By.css(".card"));
        console.log(card.nativeElement.classList)
        expect(card.nativeElement.classList.contains("pulse")).toBeFalsy();
      });
});
