import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PushMeService {

  constructor() { }

  pushMe():Observable<any> {
    return of({});
  }
}
