import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../shared/services/alerts.service';

@Component({
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  public alerts:string[] = []
  constructor(public alertsService: AlertsService) { 
    
  }

  ngOnInit() {
  }

}
