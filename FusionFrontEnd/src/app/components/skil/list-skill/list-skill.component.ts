
import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/Services/skills.service';
import {Skill } from 'src/app/models/skills.models';
import { JsonpInterceptor } from '@angular/common/http';

@Component({
  selector: 'app-list-skill',
  templateUrl: './list-skill.component.html',
  styleUrls: ['./list-skill.component.css']
})
export class ListSkillComponent implements OnInit {

  skills: Skill[]=[];
  constructor(private skillsService:SkillsService){}
  ngOnInit(): void {

    this.skillsService.getAllSkills()
    .subscribe(
      {
        next:(skills)=>{
          this.skills=skills;
          console.log(skills);
        },
        error:(response)=>{console.log(response)}
      }
    );
    console.log(this.skills);
  }

}
