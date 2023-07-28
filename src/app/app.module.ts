import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { NewsListComponent } from './news-list/news-list.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    NewsListComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
