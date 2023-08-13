import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { DetailedRecipeComponent } from './detailed-recipe/detailed-recipe.component';



@NgModule({
  declarations: [
    NewRecipeComponent,
    DetailedRecipeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipeModule { }
