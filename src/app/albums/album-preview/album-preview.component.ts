import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from 'src/app/shared/layout/layout.service';

@Component({
  selector: 'app-album-preview',
  templateUrl: './album-preview.component.html',
  styleUrls: ['./album-preview.component.css']
})
export class AlbumPreviewComponent implements OnInit {

  @Input() album: any;
  mouseOverImage: boolean;
  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
  }

  mouseEnterImage() {
    this.mouseOverImage = true;
  }

  mouseLeaveImage() {
    this.mouseOverImage = false;
  }

}
