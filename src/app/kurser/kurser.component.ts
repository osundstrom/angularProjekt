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
  sortedList: Courses[] = []; //Struktur enligt interface
  sort: string = "all";  //String med all
  allSubjects: string[] = [];

page = 1; //Sida för pagneringen
pageSize = 25; //Antal per sida i pagnering

  constructor(private KurserService: KurserService ) {} 
  ngOnInit() { //Körs vid start
    this.KurserService.getAllCourses().subscribe(data => { //hämtar allt via getAllCourses, premunerar
      this.KurserList = data; //Hämtas till kurserList
      this.sortedList = this.KurserList; //Sätter en lista för att sortera
      this.allSubjects = Array.from(new Set(this.KurserList.map(course => course.subject))); //Skapar en array av alla subjects, till listan för att sortera på subjects.
    })
    
  }

  //--------------------------------------------------------
//--------------------------------------------------------
  searchText: string = ""; //sök text, start tom

  sortSearchandDrop(): void { //funktion för sökning/sortering
    let searchLow = this.searchText.toLowerCase(); //till små bokstäven
   
    if (searchLow !== "" ) {  //om skild från tom
    
    this.sortedList = this.KurserList.filter(course => (course.subject === this.sort || this.sort === "all") //lägga till i sortedList, läggs till om subject matchar, om all är valt så visas allt. 
    &&(//kollar även
      course.courseCode.toLowerCase().includes(searchLow)  //kurskod i sökfuinktion
      ||
      course.subjectCode.toLowerCase().includes(searchLow)  //Ämneskod i sökfunktion
      ||
      course.level.toLowerCase().includes(searchLow) //nivå i sökfunktion
      ||
      course.progression.toLowerCase().includes(searchLow) //progression i sökfunktion
      ||
      course.courseName.toLowerCase().includes(searchLow) //kursnamn i sökfunktion
      ||
      course.institutionCode.toLowerCase().includes(searchLow)//instutitionskod i sökfunktion
      ||
      course.subject.toLowerCase().includes(searchLow) //ämne i sökfunktion
      ||
      course.syllabus.toLowerCase().includes(searchLow) //syllabus i sökfunktion
      )
      
    ) } else { //i andra fall alltså då sökrutan är tom visa alla kurser, antigen de som du sorterat på med dropdown eller alla.
      this.sortedList = this.KurserList.filter(course => course.subject === this.sort || this.sort === "all"); 
  }}

   //--------------------------------------------------------
//--------------------------------------------------------
 //--------------------------------------------------------
//--------------------------------------------------------

direction: boolean = false; //En boolean för att bestämma håll de sorteras åt

sortCode(A:any): void { 

  this.direction = !this.direction; //så den varerar mellan true och false.
  switch(A){ 
    
    case ("courseCode"): //vid coursecode sortering

      if (this.direction) { //vid true så sorterar den a-b
        this.sortedList.sort((a, b) => a.courseCode.localeCompare(b.courseCode)); 
      }

      if (!this.direction) { //vid false så sorterar den b-a
        this.sortedList.sort((a, b) => b.courseCode.localeCompare(a.courseCode)); 
      }
      
    break;

    case ("courseName")://vid courseName sortering
      if (this.direction) {//vid true så sorterar den a-b
        this.sortedList.sort((a, b) => a.courseName.localeCompare(b.courseName)); 
      }

      if (!this.direction) {//vid false så sorterar den b-a
        this.sortedList.sort((a, b) => b.courseName.localeCompare(a.courseName)); 
      }
    
    break;

    case ("subject"): //vid subject sortering
      if (this.direction) {//vid true så sorterar den a-b
        this.sortedList.sort((a, b) => a.subject.localeCompare(b.subject)); 
      }

      if (!this.direction) {//vid false så sorterar den b-a
        this.sortedList.sort((a, b) => b.subject.localeCompare(a.subject)); 
      }
    
    break;

    case ("points"): //vid points sortering
      if (this.direction)  {//vid true så sorterar den a-b
        this.sortedList.sort((a:any, b:any) => parseFloat(a.points) - parseFloat(b.points));
      }

      if (!this.direction)  { //vid false så sorterar den b-a
        this.sortedList.sort((a:any, b:any) => parseFloat(b.points) - parseFloat(a.points));
      }
    
    break;

  }

}

 //--------------------------------------------------------
//--------------------------------------------------------
 //--------------------------------------------------------
//--------------------------------------------------------

addOne(course: Courses) { //lägga till i ramschema 1
  //console.log("1")
  let addedOne:Courses[] = JSON.parse(localStorage.getItem("addedOne") || "[]"); //hämtar addedOne eller en tom array. 

  let addorNot1: string = "add"; //definerar add. 

  for ( let x = 0; x < addedOne.length; x++) { //en for loop för att kolla om kursen redan finns
    if (addedOne[x].courseCode === course.courseCode){ //om de är lika
      addorNot1 = "not"; //ändra till not
      alert("Du har redan lagt till denna kurs i ramschema 1"); //popup att den finns
    break;
  }}

  if (addorNot1 === "add") { //om de är lika med add
    addedOne.push(course); //pusha
    localStorage.setItem("addedOne", JSON.stringify(addedOne)); //sätter localstorage
  }
}

addTwo(course: Courses) {
  let addedTwo:Courses[] = JSON.parse(localStorage.getItem("addedTwo") || "[]"); //hämtar addedTwo eller en tom array.

  let addorNot2: string = "add";

  for ( let x = 0; x < addedTwo.length; x++) { //en for loop för att kolla om kursen redan finns
    if (addedTwo[x].courseCode === course.courseCode){ //om de är lika
      addorNot2 = "not"; //ändra till not
      alert("Du har redan lagt till denna kurs i ramschema 2"); //popup att den finns
    break;
  }}

  if (addorNot2 === "add") {//om de är lika med add

    addedTwo.push(course);//pusha
    localStorage.setItem("addedTwo", JSON.stringify(addedTwo)); //sätter localstorage
  }
}

addThree(course: Courses) {
  let addedThree:Courses[] = JSON.parse(localStorage.getItem("addedThree") || "[]"); //hämtar addedThree eller en tom array.

  let addorNot3: string = "add";

  for ( let x = 0; x < addedThree.length; x++) { //en for loop för att kolla om kursen redan finns
    if (addedThree[x].courseCode === course.courseCode){ //om de är lika
      addorNot3 = "not"; //ändra till not
      alert("Du har redan lagt till denna kurs i ramschema 3"); //popup att den finns
    break;
  }}

  if (addorNot3 === "add") {//om de är lika med add
    addedThree.push(course);//pusha
    localStorage.setItem("addedThree", JSON.stringify(addedThree)); //sätter localstorage
  }
};
  

}
