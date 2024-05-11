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

  constructor(private KurserService: KurserService ) {} 
  ngOnInit() {
    this.KurserService.getAllCourses().subscribe(data => { 
      this.KurserList = data;
      this.sortedList = this.KurserList;
    })
  }

  //--------------------------------------------------------
//--------------------------------------------------------
  searchText: string = ""; 

  sortSearch(): void { 
    let searchLow = this.searchText.toLowerCase();
   
    if (searchLow !== "" ) { 
    this.sortedList = this.KurserList.filter(kurserLi => 
      kurserLi.courseCode.toLowerCase().includes(searchLow) 
      ||
      kurserLi.subjectCode.toLowerCase().includes(searchLow) 
      ||
      kurserLi.level.toLowerCase().includes(searchLow)
      ||
      kurserLi.progression.toLowerCase().includes(searchLow)
      ||
      kurserLi.courseName.toLowerCase().includes(searchLow)
      ||
      //kurserLi.points.toLowerCase().includes(searchLow)
      //||
      kurserLi.institutionCode.toLowerCase().includes(searchLow)
      ||
      kurserLi.subject.toLowerCase().includes(searchLow)
      ||
      kurserLi.syllabus.toLowerCase().includes(searchLow)
      
      
    ) } else{ 
      this.sortedList=this.KurserList; 
    }
    
  }

   //--------------------------------------------------------
//--------------------------------------------------------
 //--------------------------------------------------------
//--------------------------------------------------------
page = 1;
pageSize = 25;

  
}
