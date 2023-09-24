import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  BASE_URL = 'http://localhost:5001'

  register(name:any,email:any,password:any){

    const body={
      name,
      email,
      password
    }
    return this.http.post('http://localhost:5001/events/register',body)
  }

  login(email:any,password:any){
    const body={
      email,
      password
    }
    return this.http.post('http://localhost:5001/events',body)
    }

  getAllEvents(){
    return this.http.get(`${this.BASE_URL}/home/all-event`)
  
  }
  getAllPackages(){
    return this.http.get(`${this.BASE_URL}/view-event/:id/packages`)
  
  }
  viewEvent(id:any){
    return this.http.get(`${this.BASE_URL}/home/view-event/${id}`)
  }

  book(uname:any,phone:any,address:any,event:any,date:any) {
    const body = {
      uname,
      phone,
      address,
      event,
      date
    }
    return this.http.post(`${this.BASE_URL}/home/book`, body);
  }

  contact(name:any,email:any,message:any){
    const body = {
      name,
      email,
      message
    }
    return this.http.post(`${this.BASE_URL}/home/contact`, body);
  }
  
}
