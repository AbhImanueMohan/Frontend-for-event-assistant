import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapse: boolean = true;

  
  allEvents:any=[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
      this.api.getAllEvents().subscribe((result:any)=>{
        console.log(result);
        this.allEvents=result
        

        
        
      })
  }


  collapse(){
    this.isCollapse=!this.isCollapse
  }

}
