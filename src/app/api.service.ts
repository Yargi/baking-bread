import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Recipe } from "./types/recipe";
import { News } from "./types/news";
import { tap } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  news: any = [];

  get newsCollection(): string {
    return this.news || [];
  }

  // RECIPES
  getRecipe(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Recipe>(`${apiUrl}/recipes/${id}`);
  }

  getRecipes() {
    const { apiUrl } = environment;
    return this.http.get<Recipe[]>(`${apiUrl}/recipes.json`);
  }

  createRecipe(recipeName: string, postText: string) {
    return this.http.post<Recipe>('/recipes', { recipeName, postText });
  }

  // NEWS
  getPosts(limit?: number) {
    const { apiUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http
      .get<News[]>(`${apiUrl}/news${limitFilter}`)
      .pipe(tap((news) => (this.news = news)));
  }}
