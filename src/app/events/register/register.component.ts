import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regErrorMsg:string='';
  regSuccessMsg:string="";
 

constructor(private registerFB:FormBuilder, private api: ApiService , private route: Router){}

registerForm =this.registerFB.group({
 name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],

 email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 @ .]*')]],
 pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
})
register(){
  if(this.registerForm.valid){
    console.log(this.registerForm); 
    let name = this.registerForm.value.name
    let email= this.registerForm.value.email
    let password=this.registerForm.value.pswd
    this.api.register(name,email,password).subscribe((result:any)=>{
      alert(result.message)
        this.route.navigateByUrl('')
        this.regSuccessMsg=result.message
      
},
)

alert(' Your Account has Created')}
else{
 alert('Please create the account')
  }

 }


}
