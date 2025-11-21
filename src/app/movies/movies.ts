import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { Movie } from '@/shared/services/movies/data';

@Component({
  selector: 'op8e-movies',
  imports: [RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  readonly data = signal<Movie[]>([]);
}
