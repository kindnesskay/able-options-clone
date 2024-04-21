import { Component } from '@angular/core';
import { ContentThreeComponent } from '../components/home/content-three/content-three.component';
import { OurValuesComponent } from '../components/our-values/our-values.component';
import { OurMissionComponent } from '../components/our-mission/our-mission.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OurMissionComponent, OurValuesComponent, ContentThreeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
