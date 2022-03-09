import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { BookService } from '../service/api/book.service';
import { Book } from '../service/model/Book';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: [
  ]
})
export class BookDetailComponent implements OnInit {

  book: Book = {};

  constructor(
    private router: Router,
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params['bookId']),
      switchMap(id => this.bookService.getBook(id))
    ).subscribe(
      book => this.book = book
    )
  }

  delete() {
    // Invoke the HTTP DELETE
    this.bookService.deleteBook(this.book.id).subscribe(
      () => this.router.navigate(['/book-list'])
    )
  }

}
