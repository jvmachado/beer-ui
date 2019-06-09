import { TestBed, getTestBed } from "@angular/core/testing";
import { ContainersService } from "./containers.service";

describe("#ContainersService", () => {
  let injector: TestBed;
  let service: ContainersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ContainersService]
    });

    injector = getTestBed();
    service = injector.get(ContainersService);
  });

  it("Should connect to the server", () => {
    service.connect();

    expect(service.eventSource.url).toBe("http://localhost:8080/containers");
  });
});
