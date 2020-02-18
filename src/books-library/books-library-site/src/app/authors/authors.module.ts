import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AuthorsRoutingModule } from './authors-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListComponent, BooksListComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    SharedModule
  ]
})
export class AuthorsModule { }
