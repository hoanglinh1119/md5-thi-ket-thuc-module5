import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Book} from "../book";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;
  book: Book;
  constructor(private bookService: BookService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm=this.fb.group({
      title:['',[Validators.required, Validators.minLength(10)]],
      author:['',[Validators.required, Validators.minLength(6)]],
      description:['',[Validators.required, Validators.minLength(10)]]
    })
  }
  onSubmit(){
    if( this.bookForm.valid) {
      const value: any = this.bookForm.value;
      this.bookService.createBook(value).subscribe(next => {
        alert('them thanh cong');
        this.bookForm.reset();
      }, error => {
        alert('that bai');
      })
    }
  }
}
