import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ElecDashboardComponent } from './elec-dashboard/elec-dashboard.component';
import { AppComponent } from './app.component';
import { EntgeldatlasComponent } from './entgeldatlas/entgeldatlas.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path: 'app-component', component:AppComponent},
  {path: 'elec-dashboard-component', component:ElecDashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'entgeld', component:EntgeldatlasComponent},
  {path: 'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
