import { Component } from '@angular/core';
import{UserdataService} from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userdatawithservice:any;
  constructor(private userdata:UserdataService){
    userdata.users().subscribe((data)=>{
      this.userdatawithservice=data;
    });
  }
  title = 'Routing-blog';
}
