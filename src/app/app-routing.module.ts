import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/page/login/login.component';
import { RegisterComponent } from './modules/auth/page/register/register.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  // {path:"**", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,RegisterComponent]