import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

export type ICategoria = 'all' | 'national' | 'business' | 'sports' | 'world' | 'politics' | 'technology' | 'startup' | 'entertainment' | 'miscellaneous' | 'hatke' | 'science' | 'automobile';

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
  public loading: boolean = false;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.$categoria.subscribe(categoria => {
      console.log('subscrição do observable --> ', categoria);
      if (!categoria) { return; }
      this.getNoticia(categoria);
    });
  }

  public getNoticia(categoria: ICategoria) {
    this.news = [];
    this.loading = true;
    this.apiService.getNoticia(categoria).then(value => {
      console.log('retorno da api --> ', value);
      this.news = value.data;
      this.loading = false;
    });
  }

}
