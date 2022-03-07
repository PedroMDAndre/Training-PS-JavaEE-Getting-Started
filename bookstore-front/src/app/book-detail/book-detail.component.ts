import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: [
  ]
})
export class BookDetailComponent implements OnInit {

  book = {
    title: "dummy title",
    description: "dummy description",
    unitCost: "123",
    isbn: "123-4567-567",
    nbOfPages: "456",
    language: "English"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
