import { Component } from '@angular/core';
import { ImageSideComponent } from '../components/image-side/image-side.component';
import { OurMissionComponent } from '../components/our-mission/our-mission.component';
import { OurValuesComponent } from '../components/our-values/our-values.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ImageSideComponent,OurMissionComponent,OurValuesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
