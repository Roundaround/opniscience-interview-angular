import { Injectable } from '@angular/core';

import { delay, Observable, of } from 'rxjs';
import type { Movie } from './data';
import { movies } from './data';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  list(): Observable<Movie[]> {
    return of(movies).pipe(delay(3500));
  }
}
