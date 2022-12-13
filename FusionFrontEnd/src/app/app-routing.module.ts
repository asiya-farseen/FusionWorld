import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillsComponent } from './components/add-skills/add-skills.component';
import { ListSkillsComponent } from './components/list-skills/list-skills.component';

const routes: Routes = [
  {
    path:'',
    component:ListSkillsComponent
  },
  {
    path:'listTheSkills',
    component:ListSkillsComponent
  },
  {
    path:'skills/add',
    component:AddSkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
