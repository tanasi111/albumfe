import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {

  imageUrl: string;
  showModal: boolean;
  constructor() {
    this.showModal = false;
  }

  openLightbox(imageUrl: string) {
    this.imageUrl = imageUrl;
    this.showModal = true;
  }
}
