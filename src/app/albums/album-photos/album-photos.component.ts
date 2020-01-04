import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  albumId: number;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = 'id';
      this.albumId = +params[id];
      console.log('album id: ' + this.albumId);
      // this.getAlbumPhotos(this.albumId);
    });

  }

}
