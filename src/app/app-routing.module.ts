import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSectionListComponent } from './components/course-section-list/course-section-list.component';
import { CourseSectionDetailsComponent } from './components/course-section-details/course-section-details.component';
import { AddCourseSectionComponent } from './components/add-course-section/add-course-section.component';
import { LoginComponent } from './components/login/login.component';  // Adjust the path as necessary
import { TimerComponent } from './components/timer/timer.component';  // Adjust the path as necessary

const routes: Routes = [
  { path: '', redirectTo: 'course-section', pathMatch: 'full' },
  { path: 'course-section', component: CourseSectionListComponent },
  { path: 'course-sections/:id', component: CourseSectionDetailsComponent },
  { path: 'notes', component: AddCourseSectionComponent },
  { path: 'login', component: LoginComponent },
  {path: 'timer', component: TimerComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
