import { Injectable } from '@angular/core';
import { Courses } from '../model/courses';
//import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RamschemaService {


  constructor() { }
 
  getRamschema1(): Courses[] {
    console.log("ram1");
    const  data = localStorage.getItem("addedOne");
    console.log(data)
    return data ? JSON.parse(data): [];
  }

  getRamschema2(): Courses[] {
    console.log("ram2");
    const data = localStorage.getItem("addedTwo");
    console.log(data)
    return data ? JSON.parse(data) : [];
  }

  getRamschema3(): Courses[] {
    console.log("ram3");
    const data = localStorage.getItem("addedThree");
    console.log(data)
    return data ? JSON.parse(data): [];
  }

}