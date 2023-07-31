import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {NewsListComponent} from "./news-list/news-list.component";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {SharedModule} from "../shared/shared.module";
import { NavigationComponent } from './navigation/navigation.component';
import { CommentsListComponent } from './comments-list/comments-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NewsListComponent,
    RecipesListComponent,
    NavigationComponent,
    CommentsListComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        NgOptimizedImage
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NewsListComponent,
    RecipesListComponent
  ]
})
export class CoreModule { }
