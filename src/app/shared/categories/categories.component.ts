import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { ICategoria } from '../news/news.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categorias: ICategoria[] = [
    'all',
    'national', //Indian News only
    'business',
    'sports',
    'world',
    'politics',
    'technology',
    'startup',
    'entertainment',
    'miscellaneous',
    'hatke',
    'science',
    'automobile'
  ];
  public formGroup: FormGroup;
  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      categoria: [null]
    });
  }

  public setCategoria(categoria: ICategoria) {
    this.apiService.$categoria.next(categoria);
  }

}
