import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;
  constructor(private router: Router) {
    // Subscribe to router events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Close menu whenever route changes
        this.close()
        // Set title based on route or any logic you need
      }
    });
  }

  toggleMenu() {
    const menu = document.getElementById('menu');

    menu?.classList.toggle('show');
    const blur_box = document.querySelector('#blur-box');
    blur_box?.classList.toggle('blur-box');
    blur_box?.classList.toggle('hide');

    // const menu_btn = document.querySelector('.menu-btn');
  }

  close(){
    const menu = document.getElementById('menu');

    menu?.classList.add('show');
    const blur_box = document.querySelector('#blur-box');
    blur_box?.classList.remove('blur-box');
    blur_box?.classList.add('hide');

  }
}
