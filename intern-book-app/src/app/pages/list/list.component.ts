import { NgFor } from '@angular/common';
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
    {
      name: 'a',
      detail:
        '第三次世界大戦後の未来、サンフランシスコを舞台に賞金稼ぎ賞金稼ぎのリック•デッカードが、火星から逃亡してきたアンドロイドを「処理」するというあらすじ',
      evaluation: 2,
    },
    {
      name: 'w',
      detail: '任天堂の元社長、岩田聡さんのことばをまとめた本',
      evaluation: 20,
    },
  ];
  book: Book = {
    name: '',
    detail: '',
    evaluation: null,
  };
  today: Date = new Date();
  addBook() {
    this.bookList.push({ ...this.book });
    //{...}スプレット構文中身を展開する{}で包み直す
    this.book = {
      name: '',
      detail: '',
      evaluation: null,
    };
    // 初期化の方法としての別パターン 残しておく！
    // this.book.name = '';
    // this.book.detail = '';
    // this.book.evaluation = null;
    // 参照渡しと値渡し
  }
  deleteBook(prop: Book) {
    this.bookList = this.bookList.filter((book) => book.name !== prop.name);
    //filter()配列に使うことができる。中身を一件ずつ比較してTrueの場合データを使用する。データの件数分まわる。

    //filterのコードと同じ処理
    let _bookList: Book[] = [];
    for (let index = 0; index < this.bookList.length; index++) {
      const element = this.bookList[index];
      if (this.bookList[index].name !== prop.name) {
        // 勉強用
        // _bookList.push({
        //   name: this.bookList[index].name,
        //   detail: this.bookList[index].detail,
        //   evaluation: this.bookList[index].evaluation,
        // });
        _bookList.push({ ...this.bookList[index] });
      }
    }
  }
}
