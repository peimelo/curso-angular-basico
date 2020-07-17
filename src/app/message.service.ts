import { Injectable } from '@angular/core';
import { Alert } from './alert.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private alerts: Alert[] = [];

  getMessages(): Alert[] {
    return this.alerts;
  }

  add(alert: Alert) {
    this.alerts.push(alert);
  }

  clear() {
    this.alerts = [];
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
