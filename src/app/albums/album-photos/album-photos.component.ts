import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  albumId: string;
  private sub: any;
  photos: any;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = 'id';
      this.albumId = params[id];
      console.log('album id: ' + this.albumId);
      this.getAlbumPhotos(this.albumId);
    });
  }

  getAlbumPhotos(albumId: string) {

    this.albumService.getAlbumPhotos(albumId)
      .subscribe((data) => {
        this.photos = data;
      });

  }

}
