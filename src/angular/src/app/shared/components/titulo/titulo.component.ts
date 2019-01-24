import { Component, OnInit, Input } from '@angular/core';
import { Acao } from '../../classes/acao';

@Component({
  selector: 'titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  @Input() titulo:string;
  @Input() acoes:Acao[];

  constructor() {
    
  }

  ngOnInit() {
  }

}
