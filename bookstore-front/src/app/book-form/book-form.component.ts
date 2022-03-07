import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: [
  ]
})
export class BookFormComponent implements OnInit {
  book = {
    title: "dummy title",
    description: "dummy description",
    unitCost: "123",
    isbn: "123-4567-567",
    nbOfPages: "456",
    language: "English",
    imageURL: "http://bookstore.com/1.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
