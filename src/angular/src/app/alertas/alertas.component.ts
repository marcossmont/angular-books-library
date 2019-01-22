import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../shared/services/alertas.service';

@Component({
  selector: 'alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  public alertas:string[] = []
  constructor(public alertasService: AlertasService) { 
    
  }

  ngOnInit() {
  }

}
