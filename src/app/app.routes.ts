import { Routes } from '@angular/router';
import { RamschemaComponent } from './ramschema/ramschema.component';
import { KurserComponent } from './kurser/kurser.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    
    {path: "kurser", component: KurserComponent},
    {path: "", redirectTo: "kurser", pathMatch: "full"},
    {path: "ramschema", component: RamschemaComponent},
    {path: "404", component: ErrorComponent},
    {path: "**", component: ErrorComponent},

];
