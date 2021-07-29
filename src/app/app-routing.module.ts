import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'selectorPa',
    loadChildren: () => import('./paises/paises.module').then ( m => m.PaisesModule )
  },
  {
    path: '**',
    redirectTo: 'selectorPa'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
