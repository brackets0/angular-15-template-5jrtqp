import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';

@Injectable()
export class LocalStorageService {
  storage$: BehaviorSubject<any> = new BehaviorSubject<any>(localStorage);

  constructor() {}

  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
    this.storage$.next(localStorage);
  }

  /* ------------------------------------------------------------------------ *  
    getItem checks for a key within storage$
    a subscription to this emits only when that value has changed,
    and only emit that key/value?
  * ------------------------------------------------------------------------ */
  public getItem<T>(key: string): Observable<any> {
    return this.storage$.pipe(
      map((storage: any) => {
        return storage[key] ? JSON.parse(storage[key]) : undefined;
      })
    );
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
    this.storage$.pipe(take(1)).subscribe({
      next: (res: any) => {
        let storage = JSON.parse(res);
        delete storage[key];
        this.storage$.next(storage);
      },
    });
  }
}
