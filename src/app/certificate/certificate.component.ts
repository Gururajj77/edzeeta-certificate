import { Component, inject } from '@angular/core';
import { CertifiedUserService } from './services/certified-user.service';
import { FormsModule } from '@angular/forms';
import { VerifiedPopupComponent } from '../verified-popup/verified-popup.component';
import { verifiedUser } from '../types/userDetails';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [FormsModule, VerifiedPopupComponent, CommonModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {

  credentialId: string = "";
  successMessage: string = "";
  verifiedUserData: verifiedUser = {
    courseDate: '',
    courseName: '',
    name: '',
    courseType: ''
  };
  openDialogBox: boolean = false;

  private readonly verifyCertification: CertifiedUserService = inject(CertifiedUserService);


  checkCredentails(): boolean {
    console.log("button clicked")
    this.verifyCertification.getCertifiedUserDetails(this.credentialId).subscribe(data => {
      if (data !== undefined) {
        this.openDialogBox = !this.openDialogBox;
      }
      else this.successMessage = "Not Verified";
      this.verifiedUserData = data;
    });
    return false;
  }
}
