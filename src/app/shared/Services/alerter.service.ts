import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlerterService {
  // mixin
  _toast = Swal.mixin({
    width: 380,
    currentProgressStep: 20,
    toast : true,
    timerProgressBar: true,
    timer: 5000,
    showConfirmButton: false,
    position: 'bottom',
    customClass: "sweetAlert",
    background: "#FEF3C7",
    iconColor:  "#F59E0B",
    color: 'black',
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
  _Confirm = Swal.mixin({
    customClass: {
      confirmButton: 'bg-green-500 mx-1',
      cancelButton: 'bg-red-500 mx-1'
    },
    background: 'white',
    buttonsStyling: false
  });
  constructor() { }

  AlertSuccess(msg:string) : void
  {
    this._toast.fire("",msg,"success");
  }
  AlertError(msg:string) : void
  {
    this._toast.fire("",msg,"error");
  }
  ErrorServer() : void
  {
    this._toast.fire("","Erreur Serveur  ! Veuiller Contacter votre fournisseur","error");
  }
  ConfirmAction(msg:string = '') : void
  {
  }

}
