import { Routes } from '@angular/router';
import { RamschemaComponent } from './ramschema/ramschema.component';
import { KurserComponent } from './kurser/kurser.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path: "kurser", component: KurserComponent},
    {path: "ramschema", component: RamschemaComponent},
    {path: "", redirectTo: "/startsida", pathMatch: "full"},
    {path: "404", component: ErrorComponent},
    {path: "**", component: ErrorComponent},

];
