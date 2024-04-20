import { Component } from '@angular/core';
import { ImageSideComponent } from '../components/image-side/image-side.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ImageSideComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
