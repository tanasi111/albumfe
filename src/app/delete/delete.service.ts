import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  showDeleteDialog: boolean;
  album: any;
  photo: any;
  deletedAlbums: any = [];
  deletedPhotos: any = [];

  constructor() {
    this.showDeleteDialog = false;
  }

  openDeleteDialog(album, photo) {
    this.showDeleteDialog = true;
    this.album = album;
    this.photo = photo;
    const $body = window.document.body;
    $body.style.overflow = 'hidden';
  }

  closeDeleteDialog() {
    this.showDeleteDialog = false;
    const $body = window.document.body;
    $body.style.overflow = 'visible';
  }

  delete() {

    if (this.album != null) {
      this.deletedAlbums.push(...[this.album.id]);
      console.log(this.deletedAlbums);
    } else if (this.photo != null) {
      this.deletedPhotos.push(...[this.photo.id]);
      console.log(this.deletedPhotos);
    }

  }

}
