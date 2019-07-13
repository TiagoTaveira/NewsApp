import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

// tslint:disable-next-line: variable-name
  api_key = '09ac02579461469591079e86951e03a5';

  constructor(private http: HttpClient) { }
  initSources() {
     return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${this.api_key}`).pipe(take(1));
  }
  initArticles() {
   return this.http.get(`https://newsapi.org/v2/top-headlines?country=pt&apiKey=${this.api_key}`).pipe(take(1));
  }
// tslint:disable-next-line: ban-types
  getArticlesByID(source: String) {
   return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${this.api_key}`).pipe(take(1));
  }
}

