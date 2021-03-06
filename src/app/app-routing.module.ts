import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookEditComponent} from "./book-edit/book-edit.component";


const routes: Routes = [
  {
    path:'',
    component: BookListComponent
  },
  {
    path:'create',
    component: BookCreateComponent
  },
  {
    path: 'book/:id',
    component: BookDetailComponent
  },
  {
    path:'book/:id/edit',
    component: BookEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
