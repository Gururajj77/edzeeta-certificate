import { Injectable, inject } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertifiedUserService {

  private readonly firestore: Firestore = inject(Firestore);

  getCertifiedUserDetails(credentialId: string): Observable<any> {
    const certifiedUserRef = doc(this.firestore, 'certifiedUsers', credentialId);
    return docData(certifiedUserRef);
  }
}
