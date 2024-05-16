import { Injectable } from '@angular/core';
import { Courses } from '../model/courses';
//import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RamschemaService {


  constructor() { }

  
  getRamschema1(): any { //för ramschema 1

    const  data = localStorage.getItem("addedOne");//hämtar addedOne
    if(data) {//kollar så datan inte är null/undifined.
      return JSON.parse(data); //Returnerar parsed data, alltså javascript object
    }else {
      return []; //annars tom
    }

  }
    getRamschema2(): any { //för ramschema 2

      const  data = localStorage.getItem("addedTwo");//hämtar addedOne
      if(data) {//kollar så datan inte är null/undifined.
        return JSON.parse(data); //Returnerar parsed data, alltså javascript object
      } else {
        return []; //annars tom
      }
    }

      getRamschema3(): any { //för ramschema 3

        const  data = localStorage.getItem("addedThree");//hämtar addedOne
        if(data) {//kollar så datan inte är null/undifined.
          return JSON.parse(data); //Returnerar parsed data, alltså javascript object
        }else {
          return []; //annars tom
        }
      }
  
}