import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddSkilComponent } from './components/skil/add-skil/add-skil.component';
import { ListSkillComponent } from './components/skil/list-skill/list-skill.component';

const routes: Routes = [
  {
    path:'',
    component:ListSkillComponent
  },
  {
    path:'skills/list',
    component:ListSkillComponent
  },
  {
    path:'skills/add',
    component:AddSkilComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
