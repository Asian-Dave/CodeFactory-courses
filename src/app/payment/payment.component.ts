import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  endOfTest(){
    Swal.fire("Good job!", "Your Order has being placed!", "success");
  }
}
