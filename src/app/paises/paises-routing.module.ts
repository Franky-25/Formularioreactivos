import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorPageComponent } from './page/selector-page/selector-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'selectorHi', component: SelectorPageComponent },
      { path: '**', redirectTo: 'selectorHi' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
