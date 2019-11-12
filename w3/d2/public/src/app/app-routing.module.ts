import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'new',
    component: NewTaskComponent
  },
  {
    path: ':id',
    component: SingleTaskComponent
  },
  {
    path: '',
    // pathMatch: 'full',
    component: AllTasksComponent
  },
  {
    // any route that was not matched above
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
