import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

export interface IResult {
  category: string;
  data: INews[];
  success: boolean;
}

interface INews {
  author: string;
  content: string;
  date: string;
  imageUrl: string;
  readMoreUrl: string;
  time: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public news: INews[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  public getNoticia() {
    this.apiService.getNoticia('technology').then(value => {
      console.log('retorno da api --> ', value);
      this.news = value.data;
    });
  }

}
