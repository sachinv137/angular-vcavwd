import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Fareobuddy';
  users:any;

  constructor(private _myservice: MyserviceService) {
  
  }

  ngOnInit(){
    this._myservice.getdetails().subscribe((data) => {this.users = data;});
  }

 
}
