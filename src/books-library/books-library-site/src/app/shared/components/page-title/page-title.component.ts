import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../classes/action';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  @Input() title:string;
  @Input() actions:Action[];

  constructor() {
    
  }

  ngOnInit() {
  }

}
