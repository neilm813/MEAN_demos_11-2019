import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';


const routes: Routes = [
  {
    path: 'edit/:id',
    component: EditAuthorComponent
  },
  {
    path: 'new',
    component: NewAuthorComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: AllAuthorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
