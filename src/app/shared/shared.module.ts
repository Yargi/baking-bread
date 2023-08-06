import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersOnlyComponent } from './users-only/users-only.component';
import { LoadingComponent } from './loading/loading.component';
import { AppEmailDirective } from './validators/app-email.directive';



@NgModule({
  declarations: [
    UsersOnlyComponent,
    LoadingComponent,
    AppEmailDirective
  ],
  imports: [
    CommonModule
  ],
    exports: [
        UsersOnlyComponent,
        LoadingComponent,
        AppEmailDirective
    ]
})
export class SharedModule { }
