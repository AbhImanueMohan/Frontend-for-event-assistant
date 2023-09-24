import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  bookSuccessLoading : string=""
  bookErrorMsg: string=""

  constructor(private bookingFB:FormBuilder, private api:ApiService, private bookingRoute:Router){}
  
  bookForm = this.bookingFB.group({
    uname:['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    phone:['', [Validators.required,Validators.pattern('[0-9 ,]*')]],
    address:['', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    event:['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    date:['', [Validators.required,Validators.pattern('[0-9 -]*')]]
  })

  booking(){
    if(this.bookForm.valid){
      console.log(this.bookForm); 
      let uname = this.bookForm.value.uname
      let phone= this.bookForm.value.phone
      let address= this.bookForm.value.address
      let event = this.bookForm.value.event
      let date = this.bookForm.value.date
      this.api.book(uname,phone,address,event,date).subscribe((result:any)=>{
        alert(result.message)
          this.bookingRoute.navigateByUrl('home')
          this.bookSuccessLoading=result.message
        
},
)

 alert(' Successfully Booked')
 }
 else{
   alert('Invalid Booking Form')
  }

 }


}
