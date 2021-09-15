import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SecureInnerPagesGuard } from './auth/secure-inner-pages.guard';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { RegisterComponent } from './pages/register/register.component';
import { WordsComponent } from './words/words.component';


const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'quiensoy', component: QuienSoyComponent},
  {path: 'words', component: WordsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
