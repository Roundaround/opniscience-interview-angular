import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { OpniscienceLogo } from '@components/svgs/opniscience-logo';

@Component({
  selector: 'app-root',
  imports: [OpniscienceLogo, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
