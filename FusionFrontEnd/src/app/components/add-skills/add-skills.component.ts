import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skills.models';

import { SkillsService } from 'src/app/Services/skills.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent {
  addskillRequest:Skill={
    SkillID:'',
    SSkill:'',
   
  }
  constructor(private skillsService:SkillsService) { }

  ngOnInit(): void {
  }

  AddSkills(){
    
    // console.log(this.addEmployeeRequest.id);
    // console.log(this.addEmployeeRequest.name);
    // console.log(this.addEmployeeRequest.email);
    // console.log(this.addEmployeeRequest.salary);
    // console.log(this.addEmployeeRequest.department);
    this.skillsService.addSkills(this.addskillRequest)
    .subscribe({
        next:(skills)=>{console.log(skills);}
      })
  }
  

}


