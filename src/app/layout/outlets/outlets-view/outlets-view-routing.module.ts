import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutletsViewComponent } from './outlets-view.component';

const routes: Routes = [
    {
        path: '', component: OutletsViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutletsViewRoutingModule { }
