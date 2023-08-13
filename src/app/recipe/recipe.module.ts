import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeRoutingModule} from "./recipe-routing.module";
import { DetailedRecipeComponent } from './detailed-recipe/detailed-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';



@NgModule({
  declarations: [
    DetailedRecipeComponent,
    AddRecipeComponent,
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
