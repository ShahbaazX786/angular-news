import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './../../../services/news-api.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private api:NewsApiService) { }


  HeadLinesArray:any= [];

  ngOnInit(): void {
    this.api.getTopHeadLines().subscribe((res)=>{
      console.log(res.articles);
      this.HeadLinesArray = res.articles;

    })
  }

}
