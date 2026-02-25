import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Websocket } from 'src/app/core/services/websocket';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class Notifications implements OnInit {

  notifications: any[] = [];

  constructor(private wsService: WebsocketService) {}

  ngOnInit() {
    this.wsService.connect((message) => {
      this.notifications.unshift(message);
    });
  }
}
