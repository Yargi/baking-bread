import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersOnlyComponent } from './users-only/users-only.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    UsersOnlyComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        UsersOnlyComponent,
        LoadingComponent
    ]
})
export class SharedModule { }
