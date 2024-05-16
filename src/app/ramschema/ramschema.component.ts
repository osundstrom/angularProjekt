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
  active = 1; //Active till vilket ramschema man är inne på 1,2 eller 3

  AllCourses1: Courses [] = []; //tom array
  AllCourses2: Courses [] = []; //tom array
  AllCourses3: Courses [] = []; //tom array

  Allpoints1: number = 0; //Sätter till 0
  Allpoints2: number = 0; //Sätter till 0
  Allpoints3: number = 0; //Sätter till 0
  
  

  constructor(public ramschemaService: RamschemaService) {} //injectar ramschemaservice

  ngOnInit(): void { //kör getAllCourses vid start
    //console.log("works")
    this.getAllCourses();
    
  }

  
  getAllCourses(): void {
    //console.log("works2");
    
    switch (this.active) { //switch sats med activa numret, alltså vilken av rutorna man är inne i.
      case (1): //när active är 1
        this.AllCourses1 = this.ramschemaService.getRamschema1(); //sätts från service med getRamchema1
        this.Allpoints1 = 0; //Sätter till 0
        this.AllCourses1.forEach(e => { //kollar varje kurs i allCourses 
          this.Allpoints1 += e.points; //plussar på poängen för varje kurs i allCourses
        });
        //console.log(this.AllCourses1);
        
        break;
      case (2): //när active är 2
        
        this.AllCourses2 = this.ramschemaService.getRamschema2();

        this.Allpoints2 = 0; //Sätter till 0
        this.AllCourses2.forEach(e => { //kollar varje kurs i allCourses 
          this.Allpoints2 += e.points;//plussar på poängen för varje kurs i allCourses
        });
        break;
      case (3): //när active är 3
        
        this.AllCourses3 = this.ramschemaService.getRamschema3();

        this.Allpoints3 = 0; //Sätter till 0
        this.AllCourses3.forEach(e => { //kollar varje kurs i allCourses 
          this.Allpoints3 += e.points; //plussar på poängen för varje kurs i allCourses
        });
        //console.log(this.AllCourses3);
      break 
    }};

    
    tabNumber(tabNumber:number): void{ //funktionen för att sätta active
      this.active = tabNumber; //sätter active till tab number
      this.getAllCourses(); //kör funktionen
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
