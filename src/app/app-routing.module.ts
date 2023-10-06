import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  //main page
  {
    path:'', redirectTo:'mainPage',pathMatch:'full'
  },
  {
    path:'mainPage',component:MainPageComponent
  },
  {
    path:'mainPage/newTask',component:NewTaskComponent
  },
  {
    path:'mainPage/editTask/:name',component:EditTaskComponent
  },
  {
    path:'mainPage/viewTask/:name',component:ViewTaskComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
