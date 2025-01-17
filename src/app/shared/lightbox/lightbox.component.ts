import { Component, OnInit } from '@angular/core';
import { LightboxService } from './lightbox.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  imageUrl = 'https://i.picsum.photos/id/456/640/480.jpg';
  constructor(
    private lightboxService: LightboxService
  ) { }

  ngOnInit() {
  }

  closeLightbox() {
    this.lightboxService.closeLightbox();
  }

  changeSlide(count: number) {
    this.lightboxService.changeSlide(count);
  }

}
