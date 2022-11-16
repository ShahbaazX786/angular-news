import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './../../../services/news-api.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor(private api: NewsApiService) {}

  timeNow: string = 'askldjfsjkld';
  HeadLinesArray: any = [];

  ngOnInit(): void {
    this.getTimeNow();
    this.api.getTopHeadLines().subscribe((res) => {
      console.log(res.articles);
      this.HeadLinesArray = res.articles;
    });
  }

  getTimeNow() {
    let time = new Date().toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    });
    let date = new Date().toLocaleDateString();
    this.timeNow = " Today is " + date + " And now the time is: "+ " "+time;
    console.log(this.timeNow);

  }
}
