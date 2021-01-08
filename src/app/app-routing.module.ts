import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardviewComponent } from './dashboardview/dashboardview.component';
import { ListviewComponent } from './listview/listview.component';
import { DetailviewComponent } from './detailview/detailview.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboardview', pathMatch: 'full' },
  { path: 'dashboardview', component: DashboardviewComponent },
  { path: 'detail/: id', component: DetailviewComponent },
  { path: 'students', component: ListviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}