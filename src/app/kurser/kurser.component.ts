import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Courses } from '../model/courses';
import { KurserService } from '../services/kurser.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faSort } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-kurser',
  standalone: true,
  imports: [ FontAwesomeModule, MatRadioModule, NgbPaginationModule, NgbModule, NgFor, FormsModule, CommonModule, NgbAccordionModule],
  templateUrl: './kurser.component.html',
  styleUrl: './kurser.component.scss'
})

export class KurserComponent {
  
  faSort  = faSort ;

  KurserList: Courses[] = [];//Struktur enligt interface
  sortedList: Courses[] = [];
  sort: string = "all"; 
  allSubjects: string[] = [];

page = 1;
pageSize = 25;

  constructor(private KurserService: KurserService ) {} 
  ngOnInit() {
    this.KurserService.getAllCourses().subscribe(data => { 
      this.KurserList = data;
      this.sortedList = this.KurserList;
      this.allSubjects = Array.from(new Set(this.KurserList.map(course => course.subject)));
    })
    
  }

  //--------------------------------------------------------
//--------------------------------------------------------
  searchText: string = ""; 

  sortSearchandDrop(): void { 
    let searchLow = this.searchText.toLowerCase();
   
    if (searchLow !== "" ) { 
    //this.sortedList = this.KurserList.filter(kurserLi => 
    this.sortedList = this.KurserList.filter(course => (course.subject === this.sort || this.sort === "all") 
    &&(
      course.courseCode.toLowerCase().includes(searchLow) 
      ||
      course.subjectCode.toLowerCase().includes(searchLow) 
      ||
      course.level.toLowerCase().includes(searchLow)
      ||
      course.progression.toLowerCase().includes(searchLow)
      ||
      course.courseName.toLowerCase().includes(searchLow)
      ||
      course.institutionCode.toLowerCase().includes(searchLow)
      ||
      course.subject.toLowerCase().includes(searchLow)
      ||
      course.syllabus.toLowerCase().includes(searchLow)
      )
      
    ) } else {
      this.sortedList = this.KurserList.filter(course => course.subject === this.sort || this.sort === "all");
  }}

   //--------------------------------------------------------
//--------------------------------------------------------
 //--------------------------------------------------------
//--------------------------------------------------------

direction: boolean = false;

sortCode(A:any): void { 

  this.direction = !this.direction; //så den varerar mellan true och false.
  switch(A){ 
    
    case ("courseCode"):

      if (this.direction) {
        this.sortedList.sort((a, b) => a.courseCode.localeCompare(b.courseCode)); 
      }

      if (!this.direction) {
        this.sortedList.sort((a, b) => b.courseCode.localeCompare(a.courseCode)); 
      }
      
    break;

    case ("courseName"):
      if (this.direction) {
        this.sortedList.sort((a, b) => a.courseName.localeCompare(b.courseName)); 
      }

      if (!this.direction) {
        this.sortedList.sort((a, b) => b.courseName.localeCompare(a.courseName)); 
      }
    
    break;

    case ("subject"):
      if (this.direction) {
        this.sortedList.sort((a, b) => a.subject.localeCompare(b.subject)); 
      }

      if (!this.direction) {
        this.sortedList.sort((a, b) => b.subject.localeCompare(a.subject)); 
      }
    
    break;

    case ("points"):
      if (this.direction)  {
        this.sortedList.sort((a:any, b:any) => parseFloat(a.points) - parseFloat(b.points));
      }

      if (!this.direction)  {
        this.sortedList.sort((a:any, b:any) => parseFloat(b.points) - parseFloat(a.points));
      }
    
    break;

  }

}
  
  

}
