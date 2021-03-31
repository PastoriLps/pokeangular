import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaginationSectionComponent } from './pagination-section/pagination-section.component';
import { CardsComponent } from './cards/cards.component';
import { PokeApiService } from './pokeApi/poke-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginationSectionComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
