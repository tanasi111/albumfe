import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DeleteService } from 'src/app/delete/delete.service';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {

  previousImageUrl: string;
  imageUrl: string;
  imageId: number;
  firstImageId: number;
  lastImageId: number;
  nextImageUrl: string;

  showLightbox: boolean;
  images: any;

  constructor(
    private deletedService: DeleteService
  ) {
    this.showLightbox = false;
  }

  openLightbox(imageUrl: string, imageId: number) {
    this.imageUrl = imageUrl;
    this.imageId = imageId;
    this.firstImageId = this.images[0].id;
    this.lastImageId = this.images[this.images.length - 1].id;
    this.showLightbox = true;
    const $body = window.document.body;
    $body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.showLightbox = false;
    const $body = window.document.body;
    $body.style.overflow = 'visible';
  }

  changeSlide(count: number) {
    let id = count + this.imageId;

    while (this.deletedService.deletedPhotos.includes(id)) {
      id = count + id;
    }

    if (id >= this.firstImageId && id <= this.lastImageId) {
      this.imageId = id;
      this.imageUrl = `https://i.picsum.photos/id/${this.imageId}/640/480.jpg`;
    }
  }

}
