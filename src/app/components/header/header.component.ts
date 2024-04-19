import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  toggleMenu() {
    const menu = document.getElementById("menu");
    menu?.classList.toggle("show")
    
    
    // const menu_btn = document.querySelector('.menu-btn');
  }
}
