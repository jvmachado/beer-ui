import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ContainersService {
  private sourceUrl = "http://localhost:8080/";

  eventSource;

  connect(): Observable<any> {
    this.eventSource = new EventSource(this.sourceUrl + "containers");
    return Observable.create(observer => {
      const eventSource = this.eventSource;
      eventSource.onmessage = x => observer.next(x.data);
      eventSource.onerror = x => observer.error(x);

      return () => {
        eventSource.close();
      };
    });
  }
}
