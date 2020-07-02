import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuCollapsed = true;

  @Input() title: string;
  @Input() navItems: { path: string; text: string }[];
}
