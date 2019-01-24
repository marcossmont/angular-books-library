import { Injectable } from '@angular/core';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  public alerts: string[] = [];

  public adicionar(alerta: string) {
    this.alerts.push(alerta);

    (async () => { 
      await delay(5000);
      const indiceDaMensagem: number = this.alerts.indexOf(alerta);
      if (indiceDaMensagem !== -1) {
          this.alerts.splice(indiceDaMensagem, 1);
      } 
    })();
  }

  public limpar() {
    this.alerts = [];
  }
}
