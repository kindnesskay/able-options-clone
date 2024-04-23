import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ImageSideComponent } from '../components/image-side/image-side.component';
import { VideoComponent } from '../components/video/video.component';

@Component({
  selector: 'app-ndis',
  standalone: true,
  imports: [ImageSideComponent, VideoComponent],
  templateUrl: './ndis.component.html',
  styleUrl: './ndis.component.css',
})
export class NdisComponent {
  @ViewChildren('gridBoxes') gridBoxes!: QueryList<ElementRef>;
  @ViewChildren('gridBox') gridBox!: QueryList<ElementRef>;

  boxes = [
    { videoId: 'qZOjPBJiBPg', width: 0, height: 0 }, // Sample video IDs, replace with your own
    { videoId: '0KT3g3sf6-I', width: 0, height: 0 },
    { videoId: 'EKuraO6yaWk', width: 0, height: 0 },
    // Add more boxes as needed
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.setBoxDimensions();
    }, 0);
  }

  setBoxDimensions() {
    
    return this.gridBox.forEach((box, index) => {
      const width = this.gridBox.first.nativeElement.offsetWidth
      const height = this.gridBox.first.nativeElement.offsetHeight
      this.boxes[index].width = width;
      this.boxes[index].height = height;
      console.log(index);
      
    });
  }
}
