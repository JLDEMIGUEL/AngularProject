import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { AricleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [AricleService]
})
export class ArticleComponent implements OnInit {

  public article : Article;
  public url: string;
  constructor(
    private _articleService: AricleService,
    private _route : ActivatedRoute,
    private _router : Router
  ) { 

    
    this.url = Global.url;
    this.article={} as Article;

    this._route.params.subscribe(params=>{
      let id = params['id']

      this._articleService.getArticle(id).subscribe({
        next: response => {
          this.article = response.article;
        },
        error: error => {
          console.log(error);
          this._router.navigate(['/home'])
        }})
    })


  }

  ngOnInit(): void {
  }

  delete(id: string){

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'El artículo se eliminará permanentemente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        this._articleService.delete(id).subscribe(
          response=>{
            this._router.navigate(['/blog'])
          },
          error=>{
            console.log(error)
            this._router.navigate(['/blog'])
          }
        )
        Swal.fire('Artículo borrado', 'El artículo ha sido borrado', 'success');
      } else {
        Swal.fire('Operación cancelada', 'El artículo no ha sido borrado');
      }
    });
  }

}
