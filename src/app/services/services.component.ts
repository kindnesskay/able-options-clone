import { Component } from '@angular/core';
import { ImageSideComponent } from '../components/image-side/image-side.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ImageSideComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
