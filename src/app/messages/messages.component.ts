import { Component } from '@angular/core';
import { Alert } from '../alert.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}

  close(alert: Alert) {
    this.messageService.close(alert);
  }
}
