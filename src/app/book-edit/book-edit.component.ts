import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book;
  bookForm: FormGroup;

  constructor(private router: Router, private bookService: BookService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookForm=this.fb.group({
      title:['',[Validators.required, Validators.minLength(10)]],
      author:['',[Validators.required, Validators.minLength(6)]],
      description:['',[Validators.required, Validators.minLength(10)]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(item =>{
      this.book=item;
      this.bookForm.patchValue(this.book);
    },error => {alert('khong ton tai');
      this.book=null;})
  }
  onSubmit(){
    if (this.bookForm.valid){
      const value = this.bookForm.value;
      const data = { ...this.book,...value};
      this.bookService.updateBook(data).subscribe(item=> {this.router.navigate([''])},error => {alert('error')})
    }
  }

}
