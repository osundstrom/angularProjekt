import { Injectable } from '@angular/core';
import { Courses } from '../model/courses';
//import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RamschemaService {


  constructor() { }
 
  getRamschema1():any {
    console.log("ram1");
    const  data = localStorage.getItem("addedOne");
    if (data) {
      return JSON.parse(data);
    };
  }

  getRamschema2(): any {
    console.log("ram2");
    const data = localStorage.getItem("addedTwo"); //Hämtar fårn localstorage
    if (data) { //kollar så data har värde, ( så de ej är null/undifined)
      return JSON.parse(data); //returnerar och parsar
    };
  }

  getRamschema3(): any {
    console.log("ram3");
    const data = localStorage.getItem("addedThree");
    if (data) {
      return JSON.parse(data);
    };
  }

}