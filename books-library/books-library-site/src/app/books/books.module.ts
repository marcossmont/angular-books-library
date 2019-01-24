import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { EditComponent } from './edit/edit.component';
import { PageTitleComponent } from '../shared/components/page-title/page-title.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListComponent, 
    CreateComponent, 
    EditComponent    
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    TextMaskModule,
    SharedModule
  ]
})
export class BooksModule { }
