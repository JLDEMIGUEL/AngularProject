import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { AricleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [AricleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article = {} as Article;
  public error: boolean = false;
  public url : string = Global.url;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: 50,
    uploadAPI: {
      url: Global.url + "/upload-image"
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube la imagen',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };


  constructor(
    private _articleService: AricleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    
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

  onSubmit() {
    this._articleService.update(this.article._id,this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.article = response.article;

          Swal.fire(  'Articulo editado!',  'Articulo editado correctamente',  'success')

          this._router.navigate(['/blog/article',this.article._id]);
        } else {
          this.error = true;
        }
      },
      error => {
        console.log(error)
        Swal.fire(  'Articulo no editado',  'Articulo no se ha podido editar',  'error')
        this.error = true;
      }
    );
  }

  imageUpload(data: any) {
    let image_data = data.body
    this.article.image = image_data.file_name;
  }

}
