import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() display = false;
  @Output() actionDialog: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public ngOnInit(): void {
  }

  public ok(): void {
    this.actionDialog.emit(true);
    this.closeDialog.emit(false);
  }

  public cancel(): void {
    this.closeDialog.emit(false);
  }
}
