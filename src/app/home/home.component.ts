import { Component } from '@angular/core';
import { ContentOneComponent } from '../components/home/content-one/content-one.component';
import { ContentTwoComponent } from '../components/home/content-two/content-two.component';
import { ContentThreeComponent } from '../components/home/content-three/content-three.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContentOneComponent, ContentTwoComponent, ContentThreeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
