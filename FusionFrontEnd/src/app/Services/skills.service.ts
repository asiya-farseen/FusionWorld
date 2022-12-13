import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Skill } from '../models/skills.models';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {


baseApiUrl:string=environment.baseApiUrl;
  constructor(private http : HttpClient) { }
  
  getAllSkills():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.baseApiUrl+'/api/Skills');
  }
  addSkills(addSkillRequest:Skill):Observable<Skill>{
    addSkillRequest.SkillID='30dd879c-ee2f-11db-8314-0800200c9a66';
    return this.http.post<Skill>(this.baseApiUrl+'/api/Skills',addSkillRequest);
  }
}