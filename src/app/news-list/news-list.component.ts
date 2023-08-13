import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {News} from "../types/news";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList: News[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe({
      next: (news) => {
        this.newsList = news;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      }
    });
  }
}
