import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../service/api/book.service';
import { Book } from '../service/model/Book';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: [
  ]
})
export class BookFormComponent implements OnInit {
  book: Book = {};
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.bookService.createBook(this.book).subscribe(
      () => this.router.navigate(['/book-list'])
    );
  }

}
