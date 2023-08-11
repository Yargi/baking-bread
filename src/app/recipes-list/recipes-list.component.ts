import { Component, OnInit } from '@angular/core';
import {Recipe} from "../types/recipe";
import {ApiService} from "../api.service";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipesList: Recipe[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService, private userService: UserService) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.apiService.getRecipes().subscribe({
      next: (recipes) => {
        this.recipesList = recipes;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      }
    });
  }

}
