import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactSuccessLoading : string=""
  contactErrorMsg: string=""

  constructor(private contactFB:FormBuilder, private api:ApiService, private contactRoute:Router, ){}
  
  contactForm = this.contactFB.group({
    name:['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['', [Validators.required,Validators.pattern('[a-zA-Z0-9@ .]*')]],
    message:['', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    
  })

  contact(){
    if(this.contactForm.valid){
      console.log(this.contactForm); 
      let name = this.contactForm.value.name
      let email= this.contactForm.value.email
      let message= this.contactForm.value.message
      this.api.contact(name,email,message).subscribe((result:any)=>{
        alert(result.message)
          this.contactRoute.navigateByUrl('/home')
          this.contactSuccessLoading=result.message
        
},
)

 alert(' Thank you for your feedback')
 }


 }
}
