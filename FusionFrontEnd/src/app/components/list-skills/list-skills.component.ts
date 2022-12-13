import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/Services/skills.service';
import {Skill } from 'src/app/models/skills.models';


@Component({
  selector: 'app-list-skills',
  templateUrl: './list-skills.component.html',
  styleUrls: ['./list-skills.component.css']
})
export class ListSkillsComponent implements OnInit {

  skills: Skill[]=[];
  constructor(private skillsService:SkillsService){}
  ngOnInit(): void {

    this.skillsService.getAllSkills()
    .subscribe(
      {
        next:(skills)=>{this.skills=skills;},
        error:(response)=>{console.log(response)}
      }
    );
  }

}