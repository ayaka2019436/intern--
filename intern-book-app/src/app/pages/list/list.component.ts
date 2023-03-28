import { Component } from '@angular/core';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  bookList: Book[] = [
    {
      name: 'アンドロイドは電気羊の夢を見るか？',
      detail:
        '第三次世界大戦後の未来、サンフランシスコを舞台に賞金稼ぎ賞金稼ぎのリック•デッカードが、火星から逃亡してきたアンドロイドを「処理」するというあらすじ',
      evaluation: 90,
    },
    {
      name: '岩田さん：岩田聡はこんなことを話していた',
      detail: '任天堂の元社長、岩田聡さんのことばをまとめた本',
      evaluation: 90,
    },
  ];
  book: Book = {
    name: '',
    detail: '',
    evaluation: 0,
  };
  today: string = '2023/03/22';
  test() {
    this.bookList.push(this.book);
    this.book = {
      name: '',
      detail: '',
      evaluation: 0,
    };
  }
  Delete(book: Book) {
    this.bookList = this.bookList.filter((b) => b.name !== book.name);
  }
}
