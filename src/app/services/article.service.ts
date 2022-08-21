import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Article } from "../models/article";
import { Global } from "./global";

@Injectable()
export class AricleService {

    public url: string;

    constructor(
        private _http: HttpClient,
    ) {
        this.url = Global.url;
    }
    test() {
        return "ArticleService funciona"
    }

    getArticles(last: number = 0): Observable<any> {
        if (last != null) {
            return this._http.get(this.url + 'articles/' + last)
        } else {
            return this._http.get(this.url + 'articles')
        }
    }

    getArticle(id: string): Observable<any> {
        return this._http.get(this.url + 'article/' + id)
    }


    search(searchString: string): Observable<any> {
        return this._http.get(this.url + 'search/' + searchString)
    }

    create(article: Article): Observable<any> {
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this._http.post(this.url + 'save', params, { headers: headers });
    }

    update(id: string, article: Article): Observable<any> {
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'article/' + id, params, { headers: headers });
    }

    delete(id: string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'article/'+id,{headers:headers});
    }
}