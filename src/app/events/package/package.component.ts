import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  allPackages:any=[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.getAllPackages().subscribe((result:any)=>{
      console.log(result);
      this.allPackages=result
  
  
})
  }


}
