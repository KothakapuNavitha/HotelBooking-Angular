import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { checkInDetailsCls } from './Classes/CheckInClass';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  url = "https://localhost:7183/api/"
  constructor(private http:HttpClient) {

    }
    insertCheckInDetails(checkcls:checkInDetailsCls){
      return this.http.post(this.url +"checkInDetails/InsertCheckIn",checkcls)
  }

  GetCheckInDetails(checkIncls:checkInDetailsCls){
    return this.http.post(this.url +"checkInDetails/GetcheckInData",checkIncls)
  }
}
