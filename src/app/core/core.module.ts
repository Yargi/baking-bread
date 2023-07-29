import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {NewsListComponent} from "./news-list/news-list.component";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NewsListComponent,
    RecipesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NewsListComponent,
    RecipesListComponent
  ]
})
export class CoreModule { }
