import { Injectable } from '@angular/core';
import { Courses } from '../model/courses';
//import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RamschemaService {


  constructor() { }

  
  getRamschema1(): any {

    const  data = localStorage.getItem("addedOne");//hämtar addedOne
    if(data) {//kollar så datan inte är null/undifined.
      return JSON.parse(data); //Returnerar parsed data, alltså javascript object
    }

  }
    getRamschema2(): any {

      const  data = localStorage.getItem("addedTwo");//hämtar addedOne
      if(data) {//kollar så datan inte är null/undifined.
        return JSON.parse(data); //Returnerar parsed data, alltså javascript object
      }
    }

      getRamschema3(): any {

        const  data = localStorage.getItem("addedThree");//hämtar addedOne
        if(data) {//kollar så datan inte är null/undifined.
          return JSON.parse(data); //Returnerar parsed data, alltså javascript object
        }
      }
  
}