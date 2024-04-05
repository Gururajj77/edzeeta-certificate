import { Component, Input } from '@angular/core';
import { verifiedUser } from '../types/userDetails';

@Component({
  selector: 'verified-popup',
  standalone: true,
  imports: [],
  templateUrl: './verified-popup.component.html',
  styleUrl: './verified-popup.component.scss'
})
export class VerifiedPopupComponent {

  @Input() isDialogOpen: boolean = true;
  @Input() userData: verifiedUser = {
    courseDate: '',
    courseName: '',
    name: '',
    courseType: ''
  };

  closeDialog() {
    this.isDialogOpen = false;
  }

}
