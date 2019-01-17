import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './listar/listar.component';
import { CriarComponent } from './criar/criar.component';

const routes: Routes = [
  { path: '', component: ListarComponent },
  { path: 'criar', component: CriarComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class LivrosRoutingModule {}