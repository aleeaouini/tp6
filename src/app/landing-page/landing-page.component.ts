import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { routes } from '../app.routes';
import { Router } from 'express';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor() {}
}
