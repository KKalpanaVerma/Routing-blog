import { Component } from '@angular/core';
import{UserdataService} from '../services/userdata.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  modeldata:any;
  userdatawithservice:any;
  constructor(private userdata:UserdataService){
    userdata.users().subscribe((data)=>{
      this.userdatawithservice=data;
    });
    this.modeldata=userdata.getDatafromModel()
  }
  
}
