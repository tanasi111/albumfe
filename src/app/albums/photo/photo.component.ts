import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from 'src/app/shared/layout/layout.service';
import { LightboxService } from 'src/app/shared/lightbox/lightbox.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() albumTitle: string;
  @Input() photo: any;
  photoUrl: string;
  mouseOverImage: boolean;

  constructor(
    private layoutService: LayoutService,
    private lightboxService: LightboxService
  ) { }

  ngOnInit() {
    this.photoUrl = `https://i.picsum.photos/id/${this.photo.id}/640/480.jpg`;
  }

  openLightbox(photoUrl: string, photoId: number) {
    this.lightboxService.openLightbox(photoUrl, photoId);
  }

  mouseEnterImage() {
    this.mouseOverImage = true;
  }

  mouseLeaveImage() {
    this.mouseOverImage = false;
  }

}
