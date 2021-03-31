import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public searchTerm: string;
  @Output() public onSearch: EventEmitter<any>;

  constructor() {
    this.onSearch = new EventEmitter();
  }

  ngOnInit(): void {}

  public searchBar() {
    if (this.searchTerm === '') {
      this.onSearch.emit(this.searchTerm);
    } else {
      this.onSearch.emit(
        {
          results: [
            {
              name: this.searchTerm.toLowerCase(),
            },
          ],
          previous: null,
          next: null,
        },
      );
    }
  }
}
