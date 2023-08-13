import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddRecipeComponent} from './add-recipe/add-recipe.component';
import {RecipeRoutingModule} from "./recipe-routing.module";



@NgModule({
  declarations: [
    AddRecipeComponent,
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
