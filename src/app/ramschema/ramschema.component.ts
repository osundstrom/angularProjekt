import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { RamschemaService } from '../services/ramschema.service';
import { Courses } from '../model/courses';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-ramschema',
  standalone: true,
  imports: [NgbModule, NgFor, NgbNavModule, CommonModule, NgIf, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './ramschema.component.html',
  styleUrl: './ramschema.component.scss'
})
export class RamschemaComponent {
  active = 1;

  AllCourses1: Courses [] = [];
  AllCourses2: Courses [] = [];
  AllCourses3: Courses [] = [];

  Allpoints1: number = 0;
  Allpoints2: number = 0;
  Allpoints3: number = 0;
  
  

  constructor(public ramschemaService: RamschemaService) {}

  ngOnInit(): void {
    console.log("works")
    this.getAllCourses();
    
  }

  
  getAllCourses(): void {
    console.log("works2");
    
    switch (this.active) {
      case (1):
        this.AllCourses1 = this.ramschemaService.getRamschema1();
        this.Allpoints1 = 0;
        this.AllCourses1.forEach(e => {
          this.Allpoints1 += e.points;
        });
        //console.log(this.AllCourses1);
        
        break;
      case (2):
        
        this.AllCourses2 = this.ramschemaService.getRamschema2();

        this.Allpoints2 = 0;
        this.AllCourses2.forEach(e => {
          this.Allpoints2 += e.points;
        });
        //console.log(this.AllCourses2);
        break;
      case (3):
        
        this.AllCourses3 = this.ramschemaService.getRamschema3();

        this.Allpoints3 = 0;
        this.AllCourses3.forEach(e => {
          this.Allpoints3 += e.points;
        });
        //console.log(this.AllCourses3);
      break 
    }};

    
    tabNumber(tabNumber:number): void{
      this.active = tabNumber;
      this.getAllCourses();
    }


    deleteFunc1(x: any): void { //funktion för 1:a ramshema delete
      const delNum = this.AllCourses1.indexOf(x);//index på den specifika kursen
      this.AllCourses1.splice(delNum, 1)//tar bort från array
      localStorage.setItem("addedOne", JSON.stringify(this.AllCourses1));//uppdaterar localstorage med den nya datan där kursen är borttagen
    };


    deleteFunc2(x: any): void { //funktion för 2:a ramschema delete
      const delNum = this.AllCourses2.indexOf(x);//index på den specifika kursen
      this.AllCourses2.splice(delNum, 1)//tar bort från array
      localStorage.setItem("addedTwo", JSON.stringify(this.AllCourses2));//uppdaterar localstorage med den nya datan där kursen är borttagen
    };


    deleteFunc3(x: any): void { //funktion för 3:e ramschema delete
      const delNum = this.AllCourses3.indexOf(x);//index på den specifika kursen
      this.AllCourses3.splice(delNum, 1)//tar bort från array
      localStorage.setItem("addedThree", JSON.stringify(this.AllCourses3));//uppdaterar localstorage med den nya datan där kursen är borttagen
    };
          
        
          
        
  
       
      
    


}
