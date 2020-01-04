import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.initLayout();
  }

  initLayout() {
    const layout: string = window.localStorage.getItem('layout');
    if (layout !== 'GRID_LAYOUT' && layout !== 'LIST_LAYOUT') {
      window.localStorage.setItem('layout', 'GRID_LAYOUT');
      this.layoutService.gridLayout = true;
    } else if (layout === 'GRID_LAYOUT') {
      this.layoutService.gridLayout = true;
    } else if (layout === 'LIST_LAYOUT') {
      this.layoutService.gridLayout = false;
    }
  }

  setLayout(layout: string) {
    window.localStorage.setItem('layout', layout);
    this.initLayout();
  }

}
