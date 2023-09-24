import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

  export class EventsComponent {
    constructor(
      private loginFB: FormBuilder,
      private api: ApiService,
      private route: Router
    ) {}
  
    loginForm = this.loginFB.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 @ .]*')]],
      pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
    });
  
    login() {
      if (this.loginForm.valid) {
        console.log(this.loginForm);
        let email = this.loginForm.value.email;
        let password = this.loginForm.value.pswd;
  
        this.api.login(email, password).subscribe(
          (result: any) => {
            console.log(result);
            alert(result.message);
  
            this.route.navigateByUrl('home');
            // Move the "login Successful" alert inside the subscribe block
            alert('Login Successful');
          },
          (error)=>{
            // Handle error if the API call fails
            alert('Login Failed. Please check your credentials or try again later.');
          }
        );
      } else {
        alert('Please enter valid credentials');
      }
    }
  

}
