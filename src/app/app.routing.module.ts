import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { DatatableComponent } from './pages/datatable/datatable.component';

const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'datatable', component: DatatableComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
