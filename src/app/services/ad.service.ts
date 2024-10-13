import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  showAd(): Observable<boolean> {
    // Simulate ad display with a 3-second delay
    return of(true).pipe(delay(3000));
  }
}