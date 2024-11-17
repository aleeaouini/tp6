import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterLink,RouterLinkActive],
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.css']

})
export class HeaderComponent {
}
//page inscription page connextion+ materiel design +lier entre page +6 autre page