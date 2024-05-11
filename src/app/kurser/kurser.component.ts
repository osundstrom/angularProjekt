import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Courses } from '../model/courses';
import { KurserService } from '../services/kurser.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-kurser',
  standalone: true,
  imports: [ NgbPaginationModule, NgbModule, NgFor, FormsModule, CommonModule, NgbAccordionModule],
  templateUrl: './kurser.component.html',
  styleUrl: './kurser.component.scss'
})

export class KurserComponent {
  


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


/*
sortDrop(): void { 

  if (this.sort === "all") {
    this.sortedList = this.KurserList;
  }else {
    this.sortedList = this.KurserList.filter(course => course.subject === this.sort);
  }
 

}*/

}
