import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() book: Book = {
    name: '',
    detail: '',
    evaluation: 0,
  };
  @Input() date?: Date;

  @Output() onDelete = new EventEmitter<Book>();
  delete() {
    this.onDelete.emit(this.book);
  }
}
