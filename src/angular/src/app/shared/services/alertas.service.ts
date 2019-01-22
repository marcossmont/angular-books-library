import { Injectable } from '@angular/core';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  public alertas: string[] = [];

  public adicionar(alerta: string) {
    this.alertas.push(alerta);

    (async () => { 
      await delay(5000);
      const indiceDaMensagem: number = this.alertas.indexOf(alerta);
      if (indiceDaMensagem !== -1) {
          this.alertas.splice(indiceDaMensagem, 1);
      } 
    })();
  }

  public limpar() {
    this.alertas = [];
  }
}
