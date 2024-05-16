import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  errorImage: string = "/assets/images/errorPhone.jpg"; //Bild
}
