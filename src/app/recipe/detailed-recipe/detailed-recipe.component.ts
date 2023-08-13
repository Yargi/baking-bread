import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../types/recipe";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-detailed-recipe',
  templateUrl: './detailed-recipe.component.html',
  styleUrls: ['./detailed-recipe.component.css']
})
export class DetailedRecipeComponent implements OnInit {

  recipe: Recipe = {author: "", description: "", ingredients: [], instructions: [], location: "", timestamp: "", title: ""};
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRecipe("1").subscribe({
      next: (recipe) => {
        this.recipe = recipe;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      }
    });
  }
}
