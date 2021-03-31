import { Component } from '@angular/core';
import { PokeApiService } from './pokeApi/poke-api.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public page: any;
  public isPrevDisable: boolean;
  public isNextDisable: boolean;

  constructor(private service: PokeApiService) {
    this.service
      .getFirstPage()
      .pipe(take(1))
      .subscribe((page) => {
        this.page = page;
        this.checkPagination();
      });
  }

  public prevPage() {
    if (this.page.previous === null) {
      this.checkPagination();
    } else {
      this.service
        .getCustomPage(this.page.previous)
        .pipe(take(1))
        .subscribe((page) => {
          this.page = page;
          this.checkPagination();
        });
    }
  }
  public nextPage() {
    if (this.page.next === null) {
      this.checkPagination();
    } else {
      this.service
        .getCustomPage(this.page.next)
        .pipe(take(1))
        .subscribe((page) => {
          this.page = page;
          this.checkPagination();
        });
    }
    console.log('page');
  }

  private checkPagination() {
    this.isPrevDisable = this.page.previous === null;
    this.isNextDisable = this.page.next === null;
  }
}
