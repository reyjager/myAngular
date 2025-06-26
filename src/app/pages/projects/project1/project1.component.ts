import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project1',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project1.component.html',
  styleUrl: './project1.component.scss'
})
export class Project1Component {
 //how to declare variable
 name:string="Renante Jaguines";
// i want to declare all my personal info here
firstName:string="Renante";
lastName:string="Jaguines";
age:number=21;
address:string="Pampanga";
email:string="XXXXXXXXXXXXXXXXXXXXXXXXX";
contact:number=123456789;
//how to declare array
hobbies:string[]=["Reading","Playing","Watching","Sleeping"];
//how to declare object
personalInfo:any={
  firstName:"Renante",
  lastName:"Jaguines",
  age:21,
  address:"Pampanga",
  email:"XXXXXXXXXXXXXXXXXXXXXXXXX",
  contact:123456789,
  hobbies:["Reading","Playing","Watching","Sleeping"]
}
}