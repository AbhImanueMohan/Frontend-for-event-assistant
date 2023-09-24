import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent {

  eventId:any
  event:any=[]

  constructor(private viewActivatedRoute:ActivatedRoute, private api:ApiService){}

  ngOnInit(): void {
      this.viewActivatedRoute.params.subscribe((data:any)=>{
        console.log(data.id);
        this.eventId=data.id

        this.api.viewEvent(this.eventId).subscribe((result:any)=>{
          console.log(result);
          this.event=result
          
        })
        
      })
  }

}
