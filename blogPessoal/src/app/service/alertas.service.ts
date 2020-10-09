import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private bsModalService : BsModalService) { }


  private showAlert(message: string, type: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
    bsModalRef.content.message= message
    bsModalRef.content.type= type
  }

  showAlertDanger(message:string){

    this.showAlert(message, 'danger')
  }

  showAlertSuccess(message:string){

    this.showAlert(message, 'success')
  }

  showAlertInfor(message:string){

    this.showAlert(message, 'Info')
  }



}


