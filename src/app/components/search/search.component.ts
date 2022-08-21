import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { AricleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [AricleService]
})
export class SearchComponent implements OnInit {

  public articles : Article[] = [];
  public url: string;
  public busqueda:string='';

  constructor(
    private _articleService: AricleService,
    private _route : ActivatedRoute,
    private _router : Router
  ) {
    this.url = Global.url;
    this._route.params.subscribe(params=>{
      let search = params['search']
      this.busqueda=search;

      this._articleService.search(search).subscribe({
        next: response => {
          this.articles = response.articles;
        },
        error: error => {
          this.articles = [];
        }})
    })

   }

  ngOnInit(): void {
  }

}
