import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { Movies } from './movies/movies';

@Component({
  imports: [RouterLink],
  template: `
    <a
      [routerLink]="['/movies']"
      class="inline-block px-3 py-2 rounded-xl text-white bg-red-900 hover:bg-red-800 active:bg-red-950"
      >Movies</a
    >
  `,
})
export class Empty {}

export const routes: Routes = [
  {
    path: '',
    component: Empty,
  },
  {
    path: 'movies',
    component: Movies,
  },
];
