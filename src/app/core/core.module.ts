import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "../shared/shared.module";
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ErrorComponent,
    NotFoundComponent,
  ],
    imports: [
        CommonModule,
        SharedModule
    ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
