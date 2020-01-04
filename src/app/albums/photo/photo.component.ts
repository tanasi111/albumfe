import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from 'src/app/layout.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() albumTitle: string;
  @Input() photo: any;

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
  }

}
