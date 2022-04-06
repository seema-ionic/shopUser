import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryListPage } from './history-list.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryListPageRoutingModule {}
