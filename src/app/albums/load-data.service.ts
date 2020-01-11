import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  albums: any;
  fullAlbums: any;
  photos: any;
  fullPhotos: any;
  firstPosition: number;
  lastPosition: number;

  constructor() {
  }

  getAlbums(albums: any) {

    this.fullAlbums = albums;
    this.firstPosition = 0;
    this.lastPosition = 7;

    if (this.firstPosition === 0 && this.fullAlbums.length >= 7) {
      this.albums = this.fullAlbums.slice(this.firstPosition, this.lastPosition);
      this.firstPosition = this.lastPosition;
      this.lastPosition = this.firstPosition + 7;
    } else if (this.firstPosition === 0 && this.fullAlbums.length < 7) {
      this.albums = this.fullAlbums;
    }

  }

  loadMoreAlbums() {

    if (this.fullAlbums.length >= this.lastPosition) {
      this.albums.push(...this.fullAlbums.slice(this.firstPosition, this.lastPosition));
      this.firstPosition = this.lastPosition;
      this.lastPosition = this.firstPosition + 7;
    } else if (this.fullAlbums.length > this.firstPosition) {
      this.albums.push(...this.fullAlbums.slice(this.firstPosition, this.fullAlbums.length));
      this.firstPosition = this.fullAlbums.length;
    } else {
      console.log('no more data');
    }

  }

  getPhotos(photos: any) {

    this.fullPhotos = photos;
    this.firstPosition = 0;
    this.lastPosition = 7;

    if (this.firstPosition === 0 && this.fullPhotos.length >= 7) {
      this.photos = this.fullPhotos.slice(this.firstPosition, this.lastPosition);
      this.firstPosition = this.lastPosition;
      this.lastPosition = this.firstPosition + 7;
    } else if (this.firstPosition === 0 && this.fullPhotos.length < 7) {
      this.photos = this.fullPhotos;
    }

  }

  loadMorePhotos() {

    if (this.fullPhotos.length >= this.lastPosition) {
      this.photos.push(...this.fullPhotos.slice(this.firstPosition, this.lastPosition));
      this.firstPosition = this.lastPosition;
      this.lastPosition = this.firstPosition + 7;
    } else if (this.fullPhotos.length > this.firstPosition) {
      this.photos.push(...this.fullPhotos.slice(this.firstPosition, this.fullPhotos.length));
      this.firstPosition = this.fullPhotos.length;
    } else {
      console.log('no more data');
    }

  }
}
