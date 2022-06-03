import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewsComponent } from './news/news.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FirstNamePipe } from './pipes/first-name.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesComponent,
    NewsComponent,
    FirstNamePipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    CategoriesComponent,
    NewsComponent,
    FirstNamePipe
  ]
})
export class SharedModule { }
