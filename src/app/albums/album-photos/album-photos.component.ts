import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { LayoutService } from 'src/app/shared/layout/layout.service';
import { LightboxService } from 'src/app/shared/lightbox/lightbox.service';
import { LoadDataService } from '../load-data.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  albumId: string;
  albumTitle: string;
  private sub: any;
  photos: any;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private layoutService: LayoutService,
    private lightboxService: LightboxService,
    private loadDataService: LoadDataService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = 'id';
      const title = 'title';
      this.albumId = params[id];
      this.albumTitle = params[title];
      console.log('album id: ' + this.albumId);
      this.getAlbumPhotos(this.albumId);
      this.lightboxService.showLightbox = false;
    });
  }

  getAlbumPhotos(albumId: string) {

    this.albumService.getAlbumPhotos(albumId)
      .subscribe((data) => {
        // this.photos = data;
        this.loadDataService.getPhotos(data);
        this.lightboxService.images = data;
      });

  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // at the bottom of the page
      this.loadDataService.loadMorePhotos();
    }
  }

}
