import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  getUserAlbums(userId: string) {
    return this.http.get(`${this.API_URL}/albums?userId=${userId}`);
  }

  getAlbumPhotos(albumId: string) {
    return this.http.get(`${this.API_URL}/photos?albumId=${albumId}`);
  }

}
