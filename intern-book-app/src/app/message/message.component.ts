import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class MessageComponent implements OnInit {
  message: string[] = [];
  constructor(public messageService: MessageService) {}
  ngOnInit() {
    this.message = this.messageService.messages;
    //配列に全部入れようとしてしまっていたから[]いらない！
  }
}
