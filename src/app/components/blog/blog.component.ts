import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { AricleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [AricleService]
})
export class BlogComponent implements OnInit {

  public title: string;
  public articles: Article[];
  public url: string;
  constructor(
    private _articleService: AricleService
  ) {
    this.title = 'Blog';
    this.url = Global.url;

    this.articles = [];
    this._articleService.getArticles().subscribe({
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
