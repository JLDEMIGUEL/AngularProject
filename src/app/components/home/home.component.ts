import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { AricleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AricleService]
})
export class HomeComponent implements OnInit {

  public title : string;
  public articles: Article[];
  public url: string;
  constructor(
    private _articleService: AricleService
  ) { 
    this.title='Últimos artículos';
    this.url = Global.url;

    this.articles = [];
    this._articleService.getArticles(5).subscribe({
      next: response => {
        this.articles = response.articles;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  ngOnInit(): void {
  }

}
