import { Component, Input } from '@angular/core';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() aBook: Book = {
    name: '',
    detail: '',
    evaluation: 0,
  };
  @Input() date?: string;
}
