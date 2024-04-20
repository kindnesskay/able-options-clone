import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  toggleMenu() {
    const menu = document.getElementById("menu");
    menu?.classList.toggle("show")
    const blur_box=document.querySelector('#blur-box')
    blur_box?.classList.toggle('blur-box')
    blur_box?.classList.toggle('hide')
    
    
    // const menu_btn = document.querySelector('.menu-btn');
  }
}
