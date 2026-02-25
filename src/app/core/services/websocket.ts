import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class Websocket {

  private stompClient: any;

  connect(callback: (message: any) => void) {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, () => {

      this.stompClient.subscribe('/topic/notifications', (message: any) => {
        callback(JSON.parse(message.body));
      });

    });
  }
}
