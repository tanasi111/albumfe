import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from 'src/app/shared/layout/layout.service';
import { DeleteService } from 'src/app/delete/delete.service';

@Component({
  selector: 'app-album-preview',
  templateUrl: './album-preview.component.html',
  styleUrls: ['./album-preview.component.css']
})
export class AlbumPreviewComponent implements OnInit {

  @Input() album: any;
  mouseOverImage: boolean;

  constructor(
    private layoutService: LayoutService,
    private deleteService: DeleteService
  ) { }

  ngOnInit() {
  }

  mouseEnterImage() {
    this.mouseOverImage = true;
  }

  mouseLeaveImage() {
    this.mouseOverImage = false;
  }

  deletedAlbum(): boolean {
    return this.deleteService.deletedAlbums.includes(this.album.id);
  }

}
