import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentGuard } from './student.guard';
import { LoginComponent } from './login/login.component';
import { DetailsGuard } from './guards/details.guard';
import { LoginusersGuard } from './guards/loginusers.guard';
import { PipeComponent } from './pipe/pipe.component';
import { ParentComponent } from './parent/parent.component';
// import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'student',
    children: [
      { path: '', component: StudentComponent, canActivate: [StudentGuard] },
      // {path: 'student-details/:index', component:StudentDetailsComponent, canActivate: [LoginusersGuard, DetailsGuard]},
      { path: 'student-details', component: StudentDetailsComponent, canActivate: [DetailsGuard] },
    ],
  },
  // {path: 'child', component: ChildComponent},  
  { path: 'parent', component: ParentComponent },
  { path: 'pipe', component: PipeComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
