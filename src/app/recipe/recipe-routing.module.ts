import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "../core/error/error.component";
import {NotFoundComponent} from "../core/not-found/not-found.component";
import {RecipesListComponent} from "../recipes-list/recipes-list.component";
import {AddRecipeComponent} from "./add-recipe/add-recipe.component";


const routes: Routes = [
  {
    path: 'recipes',
    children: [
      {path: '', pathMatch: 'full', component: RecipesListComponent},
      // {path: ':recipeId', component: DetailedRecipeComponent}
    ]
  },
  {
    path: 'add-recipe',
    component: AddRecipeComponent
  },
  /*{
    path: 'detailed-recipe',
    component: DetailedRecipeComponent
  },*/

  { path: 'error', component: ErrorComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
