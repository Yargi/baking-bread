import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "../shared/shared.module";
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ErrorComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        NgOptimizedImage
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
