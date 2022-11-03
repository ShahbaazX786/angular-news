import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private _http:HttpClient) { }

  TopHeadLines='https://newsapi.org/v2/top-headlines?country=us&apiKey=795bd5a177f04b56a96869145b378455';

  getTopHeadLines():Observable<any>{
    return this._http.get(this.TopHeadLines);
  }
}
