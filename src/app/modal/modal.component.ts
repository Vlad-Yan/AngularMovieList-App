import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {MatDialogRef, MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MovieItem} from "../interfaces/movie-item";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: 'modal.component-dialog.html',
})

export class DialogElementsExampleDialog {

  @Input() item: MovieItem;
  @Output() sendMovie: EventEmitter<MovieItem> = new EventEmitter<MovieItem>();
  // @Output() sendMovieForm: EventEmitter<this.data> = new EventEmitter<this.data>();

  constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
  @Inject(MAT_DIALOG_DATA) public data: MovieItem
) {}

  closeDialog(movie: MovieItem) {
    this.dialogRef.close(movie);
  }

}
