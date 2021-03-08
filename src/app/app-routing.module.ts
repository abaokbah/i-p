import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent }    from "./posts/post-list/post-list.component";
import { PostCreateComponent }  from "./posts/post-create/post-create.component";
import { LoginComponent }       from './auth/login/login.component';
import { SignupComponent }      from "./auth/signup/signup.component";
import { AuthGuard }            from './auth/auth.guard';
import { HomeComponent }        from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  {path: 'home',    component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'create',  component: PostCreateComponent, canActivate: [AuthGuard]},
  {path: 'posts',   component: PostListComponent, canActivate: [AuthGuard]},
  {path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard]},

  {path: 'login',   component: LoginComponent},
  {path: 'signup',  component: SignupComponent},

  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
