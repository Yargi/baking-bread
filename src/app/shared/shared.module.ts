import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersOnlyComponent } from './users-only/users-only.component';



@NgModule({
  declarations: [
    UsersOnlyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersOnlyComponent
  ]
})
export class SharedModule { }
