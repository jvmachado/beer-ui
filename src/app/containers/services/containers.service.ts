import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BeerContainer } from './types/beer-container.type';

@Injectable()
export class ContainersService {
  private sourceUrl = "http://localhost:8080/";

  eventSource;

  connect(): Observable<BeerContainer[]> {
    this.eventSource = new EventSource(this.sourceUrl + "containers");
    return Observable.create(observer => {
      const eventSource = this.eventSource;
      eventSource.onmessage = x => observer.next(JSON.parse(x.data));
      eventSource.onerror = x => observer.error(x);

      return () => {
        eventSource.close();
      };
    });
  }
}
