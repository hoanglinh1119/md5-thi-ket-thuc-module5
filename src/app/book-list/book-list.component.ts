import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
   bookList: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.listBook().subscribe(item =>(this.bookList=item),error => {alert('error');})
  }
  deleteBook(i) {
    const book = this.bookList[i];
    this.bookService.deleteBook(book.id).subscribe(() => {
      this.bookList = this.bookList.filter(t => t.id !== book.id);
    });
  }
}
