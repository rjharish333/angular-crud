import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { RouterModule } from '@angular/router';

const routes = [
      { path: '', pathMatch:'full', redirectTo: 'add-book'},
      { path: 'books-list', component: BooksListComponent},
      { path: 'add-book', component: AddBookComponent},
      { path: 'edit-book/:id', component: BookDetailComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
