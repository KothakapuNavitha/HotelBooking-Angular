import {checkInDetailsCls} from '../Classes/CheckInClass';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckInService } from '../check-in.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-check-in-details',
  templateUrl: './check-in-details.component.html',
  styleUrls: ['./check-in-details.component.css']
})
export class CheckInDetailsComponent {
public checkInDetailsForm!:FormGroup;
public checkInCls!:checkInDetailsCls;
public getCheckInDetails!:number;
RoomNo!: number;
public msg:string="";
public textcolor:string="";
constructor(
  private checkInSrv: CheckInService,
  private fb: FormBuilder,
  private snackbar: MatSnackBar,
  private toastr: ToastrService
) {
  this.formInit();
  this.checkInCls = new checkInDetailsCls();
}
ngOnInit(): void {}
formInit() {
  this.checkInDetailsForm = this.fb.group({
   // roomNo: ['', Validators.required],
    clientName: ['', Validators.required],
    no_OfPersons: ['', Validators.required],
    price: ['', Validators.required],
    BookingType: ['', Validators.required],
    BookingDate: ['', Validators.required],
    paidAmount: ['', Validators.required],
    pendingAmount: ['', Validators.required],
    amount_Cleared: ['', Validators.required],
    notes: ['', Validators.nullValidator],
  });
}
Submit() {
  console.log('from submit');
  console.log(this.checkInDetailsForm.value);
  if (this.checkInDetailsForm.invalid) {
    this.snackbar.open('Please enter required fields', 'Okay');
    this.toastr.error('Please Enter Reqiured Feilds', 'ERROR');
    return;
  } else {
    try {
      const formValues = this.checkInDetailsForm.value;
      this.checkInCls.mode = 'Insert';
      this.checkInCls.roomNo = formValues.RoomNo;
      this.checkInCls.clientName = formValues.clientName;
      this.checkInCls.no_OfPersons = formValues.no_OfPersons;
      this.checkInCls.price = formValues.price;
      this.checkInCls.BookingType = formValues.BookingType;
      this.checkInCls.BookingDate = formValues.BookingDate;
      this.checkInCls.paidAmount = formValues.paidAmount;
      this.checkInCls.pendingAmount = formValues.pendingAmount;
      this.checkInCls.amount_Cleared = formValues.amount_Cleared;
      this.checkInCls.notes = formValues.notes;
      this.snackbar.open('Details Inserted', 'Okay');
      this.toastr.success('Details Inserted', 'SUCCESS');
      console.log(this.checkInCls);
      this.checkInSrv
        .insertCheckInDetails(this.checkInCls)
        .subscribe((res: any) => {
          console.log(res);
          if (res.status === 'Success') {
            this.msg = res.dbMsg;
             this.textcolor = 'green';
          } else {
            this.msg = res.dbMsg;
             this.textcolor = 'red';
          }
        });
    } catch (ex: any) {
      this.msg = ex.message;
       this.textcolor = 'red';
    } finally {}
  }
}
Update() {
  console.log(this.checkInDetailsForm.value);
  if (this.checkInDetailsForm.invalid) {
    this.snackbar.open('Please Enter Required Fields', 'okay');
    this.toastr.error('Please Enter Reqiured Feilds', 'ERROR');
    return;
  } else {
    try {
      const formValues = this.checkInDetailsForm.value;
      this.checkInCls.mode = 'Update';
      this.checkInCls.roomNo = formValues.RoomNo;
      this.checkInCls.clientName = formValues.clientName;
      this.checkInCls.no_OfPersons = formValues.no_OfPersons;
      this.checkInCls.price = formValues.price;
      this.checkInCls.BookingType = formValues.BookingType;
      this.checkInCls.BookingDate = formValues.BookingDate;
      this.checkInCls.paidAmount = formValues.paidAmount;
      this.checkInCls.pendingAmount = formValues.pendingAmount;
      this.checkInCls.amount_Cleared = formValues.amount_Cleared;
      this.checkInCls.notes = formValues.notes;
      this.snackbar.open('Details Updated', 'Okay');
      this.toastr.success('Details Updated', 'SUCCESS');
      console.log(this.checkInCls);
      this.checkInSrv
        .insertCheckInDetails(this.checkInCls)
        .subscribe((res: any) => {
          console.log(res);
          if (res.status === 'Success') {
            this.msg = 'updated successfully';
            this.textcolor = 'green';
          } else {
            this.msg = 'not updated';
            this.textcolor = 'red';
          }
        });
    } catch (ex: any) {
      this.msg = ex.message;
      this.textcolor = 'red';
    } finally {
    }
  }
}

Get() {
  this.checkInCls.mode = 'Get';
  this.checkInCls.roomNo = this.getCheckInDetails;
  this.checkInCls.roomNo = this.RoomNo;
  console.log(this.checkInCls);
  this.checkInSrv.
  GetCheckInDetails(this.checkInCls)
    .subscribe((res: any) => {
      console.log(res);
      if (res.status === 'Success') {
        this.checkInDetailsForm.controls['clientName'].setValue(res.clientName);
        this.checkInDetailsForm.controls['no_OfPersons'].setValue(
          res.no_OfPersons
        );
        this.checkInDetailsForm.controls['price'].setValue(
          res.price
        );
        this.checkInDetailsForm.controls['BookingType'].setValue(
          res.bookingType
        );
        this.checkInDetailsForm.controls['BookingDate'].setValue(res.bookingDate);
        this.checkInDetailsForm.controls['paidAmount'].setValue(
          res.paidAmount
        );
        this.checkInDetailsForm.controls['pendingAmount'].setValue(
          res.pendingAmount
        );
        this.checkInDetailsForm.controls['amount_Cleared'].setValue(res.amount_Cleared);
        this.checkInDetailsForm.controls['notes'].setValue(res.notes);
        this.snackbar.open('Details Retrieved', 'Okay');
        this.toastr.success('Details Retrieved', 'SUCCESS');

        this.msg = res.dbMsg;
        this.textcolor = 'green';
      } else {
        this.snackbar.open('Please Enter RoomNo ', 'Okay');
        this.toastr.error('Please Enter RoomNo ', 'ERROR');
        this.msg = res.dbMsg;
        this.textcolor = 'red';
      }
    });
}

Delete() {
  this.checkInCls.mode = 'Delete';
  this.checkInCls.roomNo = this.RoomNo;
  console.log(this.checkInCls);
  this.checkInSrv
    .GetCheckInDetails(this.checkInCls)
    .subscribe((res: any) => {
      console.log(res);

      if (res.status === 'Success') {
        this.msg = res.dbMsg;
        this.textcolor = 'green';
        this.snackbar.open('Details Deleted', 'Okay');
        this.toastr.success('Details Deleted', 'SUCCESS');
      } else {
        this.snackbar.open('Please Enter RoomNo ', 'Okay');
        this.toastr.error('Please Enter RoomNo ', 'ERROR');
        this.msg = res.dbMsg;
        this.textcolor = 'red';
      }
    });
}
catch(ex: any) {
  this.msg = ex.message;
  this.textcolor = 'red';
}
Clear() {
  this.formInit();
  this.msg = '';
  this.textcolor = '';
}
ngOnDestroy(): void {}

}
