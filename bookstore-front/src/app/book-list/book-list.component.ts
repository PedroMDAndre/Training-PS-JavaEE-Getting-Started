import { Component, OnInit } from '@angular/core';

import { BookService } from '../service/api/book.service';
import { Book } from '../service/model/Book';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  nbBooks: number = 2;
  books: Book[] = [];


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.countBooks().subscribe(
      (nbBooks: number) => this.nbBooks = nbBooks
    );

    this.bookService.getBooks().subscribe(
      books => this.books = books
    );
  }

}
