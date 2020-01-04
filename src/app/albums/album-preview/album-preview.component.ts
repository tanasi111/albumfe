import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from 'src/app/layout.service';

@Component({
  selector: 'app-album-preview',
  templateUrl: './album-preview.component.html',
  styleUrls: ['./album-preview.component.css']
})
export class AlbumPreviewComponent implements OnInit {

  @Input() album: any;

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
  }

}
