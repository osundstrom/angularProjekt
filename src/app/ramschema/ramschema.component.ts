import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-ramschema',
  standalone: true,
  imports: [NgbModule,HeaderComponent],
  templateUrl: './ramschema.component.html',
  styleUrl: './ramschema.component.scss'
})
export class RamschemaComponent {



}
