import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {NewsListComponent} from "./news-list/news-list.component";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {CommentsListComponent} from "./comments-list/comments-list.component";
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { HomeComponent } from './home/home.component';
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {appInterceptorProvider} from "./app.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    RecipesListComponent,
    CommentsListComponent,
    AuthenticateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
