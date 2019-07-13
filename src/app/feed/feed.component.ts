import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService, private router: Router) {
    console.log('appiii component constructor called');
  }


// tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
        // load articles
// tslint:disable-next-line: no-string-literal
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    // load news sources
// tslint:disable-next-line: no-string-literal
      this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
    }

  searchArticles(source) {
    console.log('selected source is: ' + source);
// tslint:disable-next-line: no-string-literal
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
