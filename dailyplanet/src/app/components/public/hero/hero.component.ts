import { NewsApiService } from './../../../services/news-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private api:NewsApiService) { }


  HeadLinesArray = [];

  ngOnInit(): void {
    this.api.getTopHeadLines().subscribe((res)=>{
      // console.log(res);
      this.HeadLinesArray = res;

    })
  }

}
