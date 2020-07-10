import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';

  navItems: { path: string; text: string }[] = [
    { path: '/dashboard', text: 'Dashboard' },
    { path: '/heroes', text: 'Heroes' },
  ];

  constructor() {
    const token = localStorage.getItem('token');

    if (!token) {
      const randomToken = Math.random().toString(36).substr(-10);
      localStorage.setItem('token', randomToken);
    }
  }
}
