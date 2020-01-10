import { Component, OnInit, Input } from '@angular/core';
import { DeleteService } from '../delete.service';

@Component({
  selector: 'app-delete-icon',
  templateUrl: './delete-icon.component.html',
  styleUrls: ['./delete-icon.component.css']
})
export class DeleteIconComponent implements OnInit {

  @Input() photo: any;
  @Input() album: any;
  constructor(
    private deleteService: DeleteService
  ) { }

  ngOnInit() {
  }

  openDeleteDialog() {
    this.deleteService.openDeleteDialog(this.album, this.photo);
  }

}
