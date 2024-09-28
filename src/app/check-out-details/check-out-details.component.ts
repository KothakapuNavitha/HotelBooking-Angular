import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-check-out-details',
  templateUrl: './check-out-details.component.html',
  styleUrls: ['./check-out-details.component.css']
})
export class CheckOutDetailsComponent {
  public msg:string="";
  public checkOutForm!:FormGroup;
}
