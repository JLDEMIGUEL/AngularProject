import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { AricleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [AricleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article = {} as Article;
  public error: boolean = false;

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
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.article = response.article;

          Swal.fire(  'Articulo creado!',  'Articulo creado correctamente',  'success')

          this._router.navigate(['/blog']);
        } else {
          this.error = true;
        }
      },
      error => {
        console.log(error)
        Swal.fire(  'Articulo no creado',  'Articulo no se ha podido crear',  'error')
        this.error = true;
      }
    );
  }

  imageUpload(data: any) {
    let image_data = data.body
    this.article.image = image_data.file_name;
  }
}
