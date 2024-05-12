import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgbModule, NgbNavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  active = 1;


}
