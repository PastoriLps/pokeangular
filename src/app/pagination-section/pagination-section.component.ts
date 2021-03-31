import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-section',
  templateUrl: './pagination-section.component.html',
  styleUrls: ['./pagination-section.component.scss'],
})
export class PaginationSectionComponent implements OnInit {
  @Output() public prevEmitter: EventEmitter<any>;
  @Output() public nextEmitter: EventEmitter<any>;
  @Input() public isNextDisable: boolean;
  @Input() public isPrevDisable: boolean;

  constructor() {
    this.prevEmitter = new EventEmitter();
    this.nextEmitter = new EventEmitter();
  }

  ngOnInit(): void {}

  public nextPage() {
    this.nextEmitter.emit();
  }
  public prevPage() {
    this.prevEmitter.emit();
  }
}
